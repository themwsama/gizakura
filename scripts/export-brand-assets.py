#!/usr/bin/env python3
"""Export LinkedIn-ready PNGs from Gizakura brand specs."""

from __future__ import annotations

import math
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "brand"

BG_HERO = (249, 233, 229)
BG_DARK = (20, 19, 18)
FG_LIGHT = (248, 236, 232)
MUTED = (168, 160, 152)
ACCENT = (196, 92, 106)
ACCENT_LIGHT = (223, 160, 170)
INK = (26, 25, 23)


def load_font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = [
        "/System/Library/Fonts/Supplemental/Georgia Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Georgia.ttf",
        "/System/Library/Fonts/Supplemental/Times New Roman Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Times New Roman.ttf",
        "/Library/Fonts/Arial Bold.ttf" if bold else "/Library/Fonts/Arial.ttf",
    ]
    for path in candidates:
        p = Path(path)
        if p.exists():
            return ImageFont.truetype(str(p), size)
    return ImageFont.load_default()


def draw_sakura(
    draw: ImageDraw.ImageDraw,
    cx: float,
    cy: float,
    petal_rx: float,
    petal_ry: float,
    center_r: float,
    color: tuple[int, int, int],
    center_color: tuple[int, int, int],
    canvas: Image.Image | None = None,
) -> None:
    """Draw a 5-petal sakura; uses canvas paste when provided for rotated petals."""
    if canvas is not None:
        pad = int(max(petal_rx, petal_ry) * 3)
        size = pad * 2
        for i in range(5):
            petal = Image.new("RGBA", (size, size), (0, 0, 0, 0))
            pdraw = ImageDraw.Draw(petal)
            pdraw.ellipse(
                [pad - petal_rx, pad - petal_ry, pad + petal_rx, pad + petal_ry],
                fill=(*color, 255),
            )
            petal = petal.rotate(i * 72, resample=Image.Resampling.BICUBIC)
            canvas.paste(petal, (int(cx - pad), int(cy - pad)), petal)
        cdraw = ImageDraw.Draw(canvas)
        cdraw.ellipse(
            [cx - center_r, cy - center_r, cx + center_r, cy + center_r],
            fill=(*center_color, 255),
        )
        return

    for i in range(5):
        angle = math.radians(i * 72 - 90)
        px = cx + math.cos(angle) * petal_ry * 0.55
        py = cy + math.sin(angle) * petal_ry * 0.55
        bbox = [
            px - petal_rx,
            py - petal_ry * 0.5,
            px + petal_rx,
            py + petal_ry * 0.5,
        ]
        draw.ellipse(bbox, fill=color)
    draw.ellipse([cx - center_r, cy - center_r, cx + center_r, cy + center_r], fill=center_color)


def make_logo(size: int = 400) -> Image.Image:
    img = Image.new("RGB", (size, size), BG_HERO)
    rgba = img.convert("RGBA")
    draw_sakura(
        ImageDraw.Draw(rgba),
        size / 2,
        size / 2,
        petal_rx=size * 0.075,
        petal_ry=size * 0.115,
        center_r=size * 0.034,
        color=ACCENT,
        center_color=INK,
        canvas=rgba,
    )
    return rgba.convert("RGB")


def make_banner(width: int = 1128, height: int = 191) -> Image.Image:
    img = Image.new("RGB", (width, height), BG_DARK)
    draw = ImageDraw.Draw(img)

    # Diagonal hatch
    step = 18
    for x in range(-height, width + height, step):
        draw.line([(x, 0), (x + height, height)], fill=(248, 236, 232, 255), width=1)
    overlay = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    odraw = ImageDraw.Draw(overlay)
    for x in range(-height, width + height, step):
        odraw.line([(x, 0), (x + height, height)], fill=(248, 236, 232, 14), width=1)
    img = Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")
    draw = ImageDraw.Draw(img)

    # Left cream wash
    wash = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    wdraw = ImageDraw.Draw(wash)
    wdraw.rectangle([0, 0, 430, height], fill=(249, 233, 229, 10))
    img = Image.alpha_composite(img.convert("RGBA"), wash).convert("RGB")
    draw = ImageDraw.Draw(img)

    title_font = load_font(54)
    sub_font = load_font(15)

    draw.text((56, 52), "Gizakura", fill=FG_LIGHT, font=title_font)
    draw.text((58, 118), "THE STUDIO BEHIND RESUMURAI", fill=MUTED, font=sub_font)

    sakura = Image.new("RGBA", (140, 140), (0, 0, 0, 0))
    draw_sakura(
        ImageDraw.Draw(sakura),
        70,
        70,
        16,
        26,
        8,
        ACCENT,
        FG_LIGHT,
        canvas=sakura,
    )
    img.paste(sakura, (900, 26), sakura)

    small = Image.new("RGBA", (70, 70), (0, 0, 0, 0))
    draw_sakura(
        ImageDraw.Draw(small),
        35,
        35,
        9,
        14,
        4,
        ACCENT_LIGHT,
        FG_LIGHT,
        canvas=small,
    )
    small.putalpha(115)
    img.paste(small, (1010, 14), small)

    return img


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)

    logo = make_logo(400)
    logo.save(OUT / "gizakura-logo-400.png", optimize=True)

    logo_hd = make_logo(800)
    logo_hd.save(OUT / "gizakura-logo-800.png", optimize=True)

    banner = make_banner(1128, 191)
    banner.save(OUT / "gizakura-banner-1128x191.png", optimize=True)

    # LinkedIn sometimes crops differently on mobile; wider safe-area variant.
    banner_wide = make_banner(1584, 396)
    banner_wide.save(OUT / "gizakura-banner-1584x396.png", optimize=True)

    print("Exported:")
    for path in sorted(OUT.glob("gizakura-*")):
        print(f"  {path}")


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""Build LinkedIn banner with text in logo safe zone."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "brand" / "gizakura-banner-kanji.png"
OUT = ROOT / "public" / "brand"

BG_DARK = (20, 19, 18)
FG_LIGHT = (248, 236, 232)
MUTED = (168, 160, 152)

LI_W, LI_H = 1128, 191
# Right of LinkedIn profile-logo overlap; vertically centered in banner.
TEXT_X = 348
TITLE_Y = 44
SUB_Y = 114


def load_font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = (
        ["/System/Library/Fonts/Supplemental/Georgia Bold.ttf", "/System/Library/Fonts/Supplemental/Georgia.ttf"]
        if bold
        else ["/System/Library/Fonts/Supplemental/Georgia.ttf", "/System/Library/Fonts/Supplemental/Times New Roman.ttf"]
    )
    for path in candidates:
        p = Path(path)
        if p.exists():
            return ImageFont.truetype(str(p), size)
    return ImageFont.load_default()


def hatch_background(w: int, h: int) -> Image.Image:
    img = Image.new("RGB", (w, h), BG_DARK)
    overlay = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    step = 14
    for x in range(-h, w + h, step):
        draw.line([(x, 0), (x + h, h)], fill=(248, 236, 232, 16), width=1)
    return Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")


def build_banner(w: int, h: int, src: Image.Image) -> Image.Image:
    banner = hatch_background(w, h)

    # Sakura branch from source — right portion only.
    sw, sh = src.size
    branch = src.crop((int(sw * 0.58), int(sh * 0.08), sw, int(sh * 0.72)))
    branch_h = int(h * 1.15)
    branch_w = int(branch.width * (branch_h / branch.height))
    branch = branch.resize((branch_w, branch_h), Image.Resampling.LANCZOS)
    bx = w - branch_w + int(branch_w * 0.08)
    by = int(h * 0.5 - branch_h * 0.42)
    banner.paste(branch, (bx, by))

    draw = ImageDraw.Draw(banner)
    if w <= 1200:
        title_size, sub_size = 62, 17
        tx, ty, sy = TEXT_X, TITLE_Y, SUB_Y
    else:
        title_size, sub_size = 88, 24
        tx, ty, sy = 420, 128, 232

    draw.text((tx, ty), "Gizakura", fill=FG_LIGHT, font=load_font(title_size, bold=True))
    draw.text((tx + 2, sy), "THE STUDIO BEHIND RESUMURAI", fill=MUTED, font=load_font(sub_size))
    return banner


def main() -> None:
    src = Image.open(SRC).convert("RGB")
    li = build_banner(LI_W, LI_H, src)
    wide = build_banner(1584, 396, src)
    li.save(OUT / "gizakura-banner-1128x191.png", optimize=True)
    wide.save(OUT / "gizakura-banner-1584x396.png", optimize=True)
    print("Done")


if __name__ == "__main__":
    main()

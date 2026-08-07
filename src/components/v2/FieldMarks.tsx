/** Geometric atmosphere marks — fills empty field without emoji/sticker clutter. */

type MarkTone = "light" | "dark";

const tone = {
  light: "rgba(26, 25, 23, 0.18)",
  dark: "rgba(248, 236, 232, 0.22)",
} as const;

export function StarMark({
  className = "",
  size = 14,
  variant = "light",
}: {
  className?: string;
  size?: number;
  variant?: MarkTone;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      fill="none"
    >
      <path
        d="M12 2.5 L13.2 9.2 L19.5 12 L13.2 14.8 L12 21.5 L10.8 14.8 L4.5 12 L10.8 9.2 Z"
        stroke={tone[variant]}
        strokeWidth="1.1"
      />
    </svg>
  );
}

export function SphereWire({
  className = "",
  size = 28,
  variant = "light",
}: {
  className?: string;
  size?: number;
  variant?: MarkTone;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      aria-hidden
      fill="none"
    >
      <circle cx="16" cy="16" r="11" stroke={tone[variant]} strokeWidth="1" />
      <ellipse cx="16" cy="16" rx="5" ry="11" stroke={tone[variant]} strokeWidth="1" />
      <path d="M5 16h22M16 5c4 3.5 4 18.5 0 22M16 5c-4 3.5-4 18.5 0 22" stroke={tone[variant]} strokeWidth="1" />
    </svg>
  );
}

export function BarcodeMark({
  className = "",
  variant = "light",
}: {
  className?: string;
  variant?: MarkTone;
}) {
  const widths = [1, 2, 1, 1, 3, 1, 2, 1, 1, 2, 1, 3, 1, 1, 2];
  let x = 0;
  return (
    <svg
      width={72}
      height={16}
      viewBox="0 0 72 16"
      className={className}
      aria-hidden
      fill={tone[variant]}
    >
      {widths.map((w, i) => {
        const bar = (
          <rect key={i} x={x} y={0} width={w} height={16} opacity={i % 2 ? 0.55 : 1} />
        );
        x += w + 1.5;
        return bar;
      })}
    </svg>
  );
}

export function RulerEdge({
  className = "",
  variant = "light",
  vertical = false,
}: {
  className?: string;
  variant?: MarkTone;
  vertical?: boolean;
}) {
  const ticks = Array.from({ length: 12 }, (_, i) => i);
  return (
    <svg
      width={vertical ? 10 : 120}
      height={vertical ? 120 : 10}
      viewBox={vertical ? "0 0 10 120" : "0 0 120 10"}
      className={className}
      aria-hidden
      fill="none"
      stroke={tone[variant]}
      strokeWidth="1"
    >
      {ticks.map((i) => {
        const major = i % 3 === 0;
        if (vertical) {
          return (
            <line
              key={i}
              x1={major ? 0 : 4}
              y1={i * 10}
              x2={10}
              y2={i * 10}
            />
          );
        }
        return (
          <line
            key={i}
            x1={i * 10}
            y1={major ? 0 : 4}
            x2={i * 10}
            y2={10}
          />
        );
      })}
    </svg>
  );
}

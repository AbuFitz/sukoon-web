export function DropMark({
  size = 9,
  color = "#111111",
  style,
}: {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size * 1.32}
      viewBox="0 0 10 13.2"
      fill="none"
      aria-hidden
      style={{ flexShrink: 0, display: "block", ...style }}
    >
      <path
        d="M5 0C5 0 0 6.7 0 9.2a5 5 0 0 0 10 0C10 6.7 5 0 5 0Z"
        fill={color}
      />
    </svg>
  );
}

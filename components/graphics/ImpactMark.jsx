export default function ImpactMark({ className }) {
  return (
    <svg
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="300" cy="300" r="2" fill="#D9A441" />
      {[70, 120, 175, 235, 300].map((r, i) => (
        <circle
          key={r}
          cx="300"
          cy="300"
          r={r}
          stroke={i % 2 === 0 ? "#B8402E" : "#3A342C"}
          strokeOpacity={i % 2 === 0 ? 0.5 : 0.7}
          strokeWidth="1"
        />
      ))}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * Math.PI * 2) / 16;
        const inner = 240;
        const outer = i % 4 === 0 ? 300 : 260;
        const x1 = 300 + inner * Math.cos(angle);
        const y1 = 300 + inner * Math.sin(angle);
        const x2 = 300 + outer * Math.cos(angle);
        const y2 = 300 + outer * Math.sin(angle);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#D9A441"
            strokeOpacity="0.45"
            strokeWidth="1.5"
          />
        );
      })}
    </svg>
  );
}

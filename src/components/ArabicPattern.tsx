import { ArabicPatterProps } from "@/types/components";

const ArabicPattern: React.FC<ArabicPatterProps> = ({ id, color = "#B08D57", opacity = 0.07, }) => {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity }}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id={id}
          x="0"
          y="0"
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
        >
          {/* Outer square */}
          <rect
            x="14"
            y="14"
            width="52"
            height="52"
            fill="none"
            stroke={color}
            strokeWidth="0.7"
          />
          <rect
            x="14"
            y="14"
            width="52"
            height="52"
            transform="rotate(45 40 40)"
            fill="none"
            stroke={color}
            strokeWidth="0.7"
          />
          {/* Inner circle */}
          <circle
            cx="40"
            cy="40"
            r="6"
            fill="none"
            stroke={color}
            strokeWidth="0.6"
          />
          {/* Center dot */}
          <circle cx="40" cy="40" r="1.2" fill={color} />
          {/* Corner dots */}
          <circle cx="0" cy="0" r="1.8" fill={color} />
          <circle cx="80" cy="0" r="1.8" fill={color} />
          <circle cx="0" cy="80" r="1.8" fill={color} />
          <circle cx="80" cy="80" r="1.8" fill={color} />
          {/* Mid-edge dots */}
          <circle cx="40" cy="0" r="1.2" fill={color} />
          <circle cx="0" cy="40" r="1.2" fill={color} />
          <circle cx="80" cy="40" r="1.2" fill={color} />
          <circle cx="40" cy="80" r="1.2" fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

export default ArabicPattern
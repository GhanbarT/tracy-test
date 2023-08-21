import React from "react";

interface CoordinatePlotProps {
  width: number;
  height: number;
  labels: [string, string, string, string];
  point: [number, number];
}

const CoordinatePlot: React.FC<CoordinatePlotProps> = ({
  width,
  height,
  labels,
  point,
}) => {
  const [topLabel, rightLabel, bottomLabel, leftLabel] = labels;
  const [x, y] = point;

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        {/* draw the x and y axes */}
        <line
          x1={-width / 2 + 10}
          y1={0}
          x2={width / 2 - 10}
          y2={0}
          stroke="black"
        />
        <line
          x1={0}
          y1={-height / 2 + 10}
          x2={0}
          y2={height / 2 - 10}
          stroke="black"
        />

        {/* draw a point at (x,y) */}
        <circle cx={x} cy={y} r={3} fill="black" />

        {/* add text labels */}
        <text x={0} y={-height / 2 + 20} textAnchor="middle" fontSize="16">
          {topLabel}
        </text>
        <text x={0} y={height / 2 - 10} textAnchor="middle" fontSize="16">
          {bottomLabel}
        </text>
        <text
          x={-height / 2 + 20}
          y={width / 2 + 5}
          textAnchor="middle"
          fontSize="16"
          transform="rotate(-90)"
        >
          {rightLabel}
        </text>
        <text
          x={height / 2 - 20}
          y={-width / 2 - 5}
          textAnchor="middle"
          fontSize="16"
          transform="rotate(-90)"
        >
          {leftLabel}
        </text>
      </g>
    </svg>
  );
};

export default CoordinatePlot;

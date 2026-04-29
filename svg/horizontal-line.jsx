import React from "react";

const LineHorizontalIcon = ({
  size = 50,
  length = 50,
  fullWidth = false, // 🔥 NEW
  color = "#F08000",
  strokeWidth = 6,
  background = "transparent",
  opacity = 1,
  rotation = 0,
  shadow = 0,
  flipHorizontal = false,
  flipVertical = false,
  padding = 0,
}) => {
  const transforms = [];
  if (rotation !== 0) transforms.push(`rotate(${rotation}deg)`);
  if (flipHorizontal) transforms.push("scaleX(-1)");
  if (flipVertical) transforms.push("scaleY(-1)");

  // 🔥 switch logic
  const viewBoxWidth = fullWidth ? 100 : length + padding * 2 + 4;
  const svgWidth = fullWidth ? "100%" : length;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${viewBoxWidth} 24`}
      width={svgWidth}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        opacity,
        transform: transforms.join(" ") || undefined,
        filter:
          shadow > 0
            ? `drop-shadow(0 ${shadow}px ${shadow * 2}px rgba(0,0,0,0.3))`
            : undefined,
        backgroundColor:
          background !== "transparent" ? background : undefined,
      }}
    >
      {/* 🔥 dynamic path */}
      <path d={fullWidth ? "M0 12H100" : `M2 12h${length}`} />
    </svg>
  );
};

export default LineHorizontalIcon;
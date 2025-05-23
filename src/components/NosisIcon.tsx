import React from "react";

// Props interface for the NosisIcon SVG component
// Includes styling options and accessibility attributes
interface NosisIconProps {
  color?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  "aria-hidden"?: boolean;
}

// SVG icon component for the Nosis logo
// Used for branding and decorative elements throughout the app
const NosisIcon = ({
  color = "currentColor",
  width = 24,
  height = 24,
  className = "",
  "aria-hidden": ariaHidden = false,
}: NosisIconProps) => {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      width={width}
      height={height}
      className={className}
      viewBox="72 133 174 196"
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      role="img"
      aria-hidden={ariaHidden}
    >
      <g
        stroke="none"
        fill={color}
        transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
      >
        <path
          d="M2289 3641 c-42 -13 -68 -30 -81 -54 -10 -16 -14 -115 -18 -370 l-5&#10;-349 -37 -34 c-30 -27 -46 -34 -78 -34 -23 0 -53 6 -68 14 -15 8 -117 105&#10;-227 216 -237 239 -262 260 -320 260 -55 0 -89 -25 -237 -177 -126 -129 -143&#10;-162 -118 -223 7 -16 111 -124 231 -241 121 -116 229 -225 241 -241 41 -59 18&#10;-151 -46 -182 -29 -14 -79 -16 -366 -16 -322 0 -334 -1 -367 -21 -19 -12 -39&#10;-33 -44 -46 -5 -13 -9 -116 -9 -229 l0 -204 34 -38 34 -37 514 -5 513 -5 65&#10;-31 c94 -46 141 -83 200 -163 41 -55 60 -72 84 -76 17 -3 163 -5 325 -3 l294&#10;3 31 40 c76 96 130 145 209 187 l82 43 510 5 c473 5 513 6 539 23 48 32 56 68&#10;56 267 0 204 -8 237 -62 270 -31 19 -50 20 -368 20 -315 0 -337 1 -367 20 -44&#10;26 -67 73 -60 123 5 36 27 62 251 286 l246 247 0 49 0 49 -149 149 -149 150&#10;-56 5 -57 5 -177 -174 c-325 -320 -324 -319 -373 -319 -49 0 -101 26 -121 62&#10;-10 17 -14 109 -18 370 l-5 346 -24 26 c-14 14 -41 30 -60 36 -42 12 -354 12&#10;-392 1z"
        />
      </g>
    </svg>
  );
};

export default NosisIcon;

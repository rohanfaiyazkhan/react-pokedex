import * as React from "react";

const SvgTopSeparator = (props) => (
  <svg
    width={428}
    height={93}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M428 20.5H307.5L238 90H1" stroke="#951C32" strokeWidth={6} />
    <path
      d="M429 7H301.5L233 75.5H0"
      stroke="#590F0F"
      strokeOpacity={0.33}
      strokeWidth={14}
    />
  </svg>
);

export default SvgTopSeparator;

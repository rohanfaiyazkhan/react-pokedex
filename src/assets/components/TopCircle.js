import * as React from "react";

const SvgTopCircle = (props) => (
    <svg
        fill="none"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <circle cx={50} cy={50} r={50} fill="#EBCDCD" />
        <circle cx={46.5} cy={46.5} r={46.5} fill="#19699F" />
        <circle cx={40.5} cy={34.5} r={29.5} fill="#5BB4E7" />
        <circle cx={31.5} cy={25.5} r={14.5} fill="#E5E5E5" />
    </svg>
);

export default SvgTopCircle;

import * as React from "react";

const SvgDpad = (props) => (
    <svg fill="none" viewBox="0 0 80 85" {...props}>
        <g filter="url(#dpad_svg__a)" fill="#643B3B">
            <path d="M0 28a2 2 0 0 1 2-2h73a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V28Z" />
            <path d="M26 2a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2v74a2 2 0 0 1-2 2H28a2 2 0 0 1-2-2V2Z" />
        </g>
        <defs>
            <filter
                id="dpad_svg__a"
                x={0}
                y={0}
                width={80}
                height={81}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                />
                <feOffset dx={2} dy={2} />
                <feGaussianBlur stdDeviation={0.5} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_5_5"
                />
                <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_5_5"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
);

export default SvgDpad;

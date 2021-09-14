import React from "react";

export function BackwardSvgComponent(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={31}
            height={30}
            viewBox="0 0 31 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                opacity={props.opacity}
                d="M1.495 15.635h28"
                stroke="#0D324D"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                opacity={props.opacity}
                d="M6.495 9.635l-5 6 5 6"
                stroke="#000"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

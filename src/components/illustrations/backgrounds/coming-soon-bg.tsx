import * as React from "react"

export function ComingSoonBG(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={502}
            height={995}
            viewBox="0 0 502 995"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g filter="url(#prefix__filter0_d)">
                <path
                    d="M449.874 1.2c-33.132 47.052-55.006 101.746-63.783 159.489-5.028 33.247-5.42 68.511 7.855 99.249 13.275 30.737 42.221 55.549 74.427 54.438 19.167-.699 39.629-13.455 42.339-33.371 2.514-18.681-11.783-36.333-28.907-42.629-17.124-6.296-35.74-3.703-53.414 0-62.22 13.665-120.971 40.981-172.386 80.152-51.415 39.171-94.328 89.307-125.912 147.108-19.638 36.457-34.602 80.897-19.127 119.329 7.855 19.998 23.565 35.84 40.493 48.144 78.315 56.66 266.445-55.921 317.15 28.062 35.348 58.677-21.327 133.073-65.159 163.687C284.799 908.018 142.622 946.903 5 986.199"
                    stroke="#fff"
                    strokeOpacity={0.5}
                    strokeWidth={1.1}
                    strokeMiterlimit={10}
                    strokeDasharray="5.52 5.52"
                />
            </g>
            <defs>
                <filter
                    id="prefix__filter0_d"
                    x={0.849}
                    y={0.883}
                    width={514.664}
                    height={993.846}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy={4} />
                    <feGaussianBlur stdDeviation={2} />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}


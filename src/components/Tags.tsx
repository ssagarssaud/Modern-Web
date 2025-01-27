import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Tags = (props: HTMLAttributes<HTMLDivElement>) => {
    const { className, children, ...otherProps } = props;
    return (
        <div
            className={twMerge(
                "inline-flex items-center border border-lime-400 gap-2 text-lime-400 px-12 py-1 rounded-full uppercase",
                className
            )}
            {...otherProps}
        >
            <span>&#10038;</span>
            <span className="text-sm items-center">{children}</span>
        </div>
    );
};

export default Tags;

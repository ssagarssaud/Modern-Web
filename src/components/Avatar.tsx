import React, { HTMLAttributes } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const Avatar = (props: HTMLAttributes<HTMLDivElement>) => {
    const { className, children, ...otherProps } = props;
    return (
        <div
            className={twMerge(
                "size-20 rounded-full overflow-hidden border-4 border-blue-400 p-1 bg-neutral-900",
                className
            )}
            {...otherProps}
        >
            {children}
        </div>
    );
};

export default Avatar;

'use client';

import { useEffect, useRef } from "react";

const useClickOutside = (handler: () => void): React.RefObject<any> => {
    let domNode = useRef<any>();

    useEffect(() => {
        let maybeHandler = (event: MouseEvent) => {
            if (domNode.current && !domNode.current.contains(event.target)) {
                handler();
            }
        };

        document.addEventListener("mousedown", maybeHandler);

        return () => {
            document.removeEventListener("mousedown", maybeHandler);
        };
    });

    return domNode;
};

export default useClickOutside;


//this function read  and return it
//
import { useState, useEffect, useLayoutEffect, useCallback } from 'react';

type ScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface ScreenDimension {
    screenSize: ScreenSize | undefined;
    width: number | undefined;
    height: number | undefined;
}

function getScreenSize(width: number): ScreenSize {
    if (width >= 1536) {
        return '2xl';
    } else if (width >= 1280) {
        return 'xl';
    } else if (width >= 1024) {
        return 'lg';
    } else if (width >= 768) {
        return 'md';
    } else if (width >= 640) {
        return 'sm';
    } else {
        return 'xs';
    }
}

export function useScreenSize(): ScreenDimension {
    const [dimension, setDimension] = useState<ScreenDimension>({
        screenSize: undefined,
        width: undefined,
        height: undefined,
    });

    const [firstRender, setFirstRender] = useState<Boolean>(false);

    const handleResize = useCallback(() => {
        if (typeof window !== 'undefined') {
            const newSize = getScreenSize(window.innerWidth);
            setDimension({
                screenSize: newSize,
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }
    }, [])


    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize)
        };
    }, [handleResize]);

    return dimension;
}
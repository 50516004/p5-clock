import p5 from 'p5';
import { RefObject, useEffect, useRef } from 'react';

export default function useP5(sketch: (p: p5) => void): RefObject<HTMLDivElement> {
    const canvasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const p5Instance = new p5(sketch, canvasRef.current!);
        return () => {
            p5Instance.remove();
        };
    }, [sketch]);

    return canvasRef;
}
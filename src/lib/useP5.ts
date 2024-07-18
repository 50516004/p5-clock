import p5 from 'p5';
import { useEffect, useRef } from 'react';

function useP5(sketch: (p: p5) => void) {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const p5Instance = new p5(sketch, canvasRef.current!);
    return () => {
      p5Instance.remove();
    };
  }, [sketch]);

  return canvasRef;
}

export default useP5;

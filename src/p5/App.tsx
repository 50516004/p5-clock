import p5 from 'p5';
import useP5 from './useP5';

function sketch(p: p5): void {
    p.setup = function () {
        p.createCanvas(800, 600);
    };

    p.draw = function () {
        p.background(200);
        p.fill(255, 0, 0);
        p.ellipse(p.width / 2, p.height / 2, 100, 100);
    };
}

export default function App(): JSX.Element {
    const canvasRef = useP5(sketch);

    return (
        <div>
            <h1>My p5.js Sketch in React</h1>
            <div ref={canvasRef}></div>
        </div>
    );
}
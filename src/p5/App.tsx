import p5 from 'p5';
import { useRef } from 'react';
import useP5 from './useP5';

function sketch(p: p5, color: React.MutableRefObject<string>): void {
  let x = 0;
  let speed = 2;

  p.setup = function() {
    p.createCanvas(800, 600);
  };

  p.draw = function() {
    p.background(200);
    p.fill(p.color(color.current));
    p.ellipse(x, p.height / 2, 100, 100);

    x += speed;
    if (x > p.width || x < 0) {
      speed *= -1;
    }
  };
}

function App(): JSX.Element {
  const color = useRef<string>('red');
  const canvasRef = useP5((p: p5) => sketch(p, color));

  const changeColor = () => {
    color.current = color.current === 'red' ? 'blue' : 'red';
    console.log(color.current);
  };

  return (
    <div>
      <h1>My p5.js Sketch in React</h1>
      <button onClick={changeColor}>Change Color</button>
      <div ref={canvasRef}></div>
    </div>
  );
}

export default App;

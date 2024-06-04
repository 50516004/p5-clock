import p5 from 'p5';
import { useState } from 'react';
import useP5 from './useP5';

const setting = {
  background: "#282c34",
  color: "#7fffd4",
  speed: 2,
};

function sketch(p: p5): void {
  let x = 0;
  let dir = 1;

  p.setup = function () {
    p.createCanvas(p.windowWidth - 5, p.windowHeight - 5);
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth - 5, p.windowHeight - 5);
  };

  p.draw = function () {
    p.background(setting.background);
    p.fill(setting.color);
    p.noStroke();
    p.ellipse(x, p.height / 2, 100, 100);

    x += setting.speed * dir;

    if (x > p.width || x < 0) {
      dir *= -1;
    }
  };
}

function ControlPanel() {
  const [color, setColor] = useState(setting.color);
  const [speed, setSpeed] = useState(setting.speed);
  const [isDark, setIsDark] = useState(true);

  return(
    <div className='control-panel'>
        <input
          type="color"
          value={color}
          onChange={e => {
            setting.color = (e.target.value);
            setColor(setting.color);
          }} />
        <input
          type='range'
          value={speed}
          min={1}
          max={10}
          onChange={e => {
            setting.speed = parseInt(e.target.value);
            setSpeed(setting.speed);
          }} />
          <button onClick={() => {
            setting.background = isDark ? "white" : "#282c34";
            setIsDark(!isDark);
          }}>{isDark? "Light" : "Dark"}</button>
      </div>
  );
}

export default function App(): JSX.Element {
  const canvasRef = useP5(sketch);

  return (
    <div>
      <ControlPanel/>
      <div ref={canvasRef}></div>
    </div>
  );
}

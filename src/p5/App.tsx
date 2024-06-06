import { useState } from 'react';
import { Setting } from './lib/definitions';
import Canvas from './ui/Canvas';
import Clock from './ui/Clock';
import Control from './ui/Control';

const setting: Setting = {
  background: "#282c34",
  color: "#7fffd4",
  speed: 1,
  isDark: false,
};

export default function App(): JSX.Element {

  return (
    <div>
      <Canvas setting={setting} />
      <Hud />
    </div>
  );

}

function Hud() {

  const [isDark, setIsDark] = useState(true);

  return (
    <>
      <Control
        setting={setting}
        isDark={isDark}
        setIsDark={setIsDark} />
      <Clock color={isDark ? "white" : "#282c34"} />
    </>
  );

}
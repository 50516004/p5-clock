import { useState } from 'react';
import Canvas from './Canvas';
import Clock from './Clock';
import Control from './Control';
import { Setting } from './definitions';

const setting: Setting = {
  background: "#282c34",
  color: "#7fffd4",
  speed: 1,
  isDark: true,
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
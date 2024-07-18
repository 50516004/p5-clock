import { useState } from 'react';
import Clock from 'src/ui/Clock';
import Control from 'src/ui/Control';
import { Setting } from '../lib/definitions';
import Canvas from './Canvas';

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

  const [isDark, setIsDark] = useState(setting.isDark);

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
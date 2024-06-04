import Canvas from './Canvas';
import Clock from './Clock';
import Control from './Control';
import { Setting } from './definitions';

const setting: Setting = {
  background: "#282c34",
  color: "#7fffd4",
  speed: 2,
};

export default function App(): JSX.Element {

  return (
    <div>
      <Control setting={setting} />
      <Canvas setting={setting} />
      <Clock />
    </div>
  );

}

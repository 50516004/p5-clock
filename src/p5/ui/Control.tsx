import { useState } from 'react';
import { Setting } from '../lib/definitions';

type ControlArgs = {
    setting : Setting;
    isDark : boolean;
    setIsDark : (b:boolean)=>void
}

export default function Control({ setting, isDark, setIsDark }: ControlArgs) {
    const [color, setColor] = useState(setting.color);
    const [speed, setSpeed] = useState(setting.speed);

    return (
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
                setting.isDark = !isDark;
                setIsDark(setting.isDark);
            }}>{isDark ? "Light" : "Dark"}</button>
        </div>
    );
}
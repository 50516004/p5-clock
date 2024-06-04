import { useState } from 'react';
import { Setting } from './definitions';

export default function Control({ setting, }: { setting : Setting; }) {
    const [color, setColor] = useState(setting.color);
    const [speed, setSpeed] = useState(setting.speed);
    const [isDark, setIsDark] = useState(true);

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
                setting.background = isDark ? "white" : "#282c34";
                setIsDark(!isDark);
            }}>{isDark ? "Light" : "Dark"}</button>
        </div>
    );
}
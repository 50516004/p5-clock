import { useEffect, useState } from "react";

export default function Clock({color = "#282c34"}) {

    const [now, setNow] = useState(Date.now());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setNow(Date.now());
        }, 1000);

        // コンポーネントがアンマウントされたときにタイマーをクリア
        return () => clearInterval(intervalId);
    }, []); // 空の依存配列により、エフェクトはマウント時に一度だけ実行される

    const style = {
        color: color,
    };

    return (
        <h1 className="clock" style={style}>
            {formatDate(now)}
        </h1>
    );

}

function formatDate(timestamp: number) {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const dayOfWeek = daysOfWeek[date.getDay()];

    return `${year}/${month}/${day}(${dayOfWeek})${hours}:${minutes}:${seconds}`;
}

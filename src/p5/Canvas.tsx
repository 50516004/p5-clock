import p5 from 'p5';
import { Setting } from './definitions';
import useP5 from './useP5';

export default function Canvas({ setting }: { setting: Setting }) {

    const canvasRef = useP5(sketch);

    function sketch(p: p5): void {
        let x = 0;
        let y = 0;
        let dir_x = 1;
        let dir_y = 1;

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
            p.ellipse(x, y, 100, 100);

            x += setting.speed * dir_x;
            if (x > p.width || x < 0) {
                dir_x *= -1;
            }

            y += setting.speed * dir_y;
            if (y > p.height || y < 0) {
                dir_y *= -1;
            }
        };
    }

    return (
        <div ref={canvasRef}></div>
    );

}
import p5 from 'p5';
import { Ball, Setting } from '../lib/definitions';
import useP5 from '../lib/useP5';

export default function Canvas({ setting }: { setting: Setting }) {

    const canvasRef = useP5(sketch);

    function bgColor() {
        return setting.isDark ? "#282c34" : "white";
    }

    function sketch(p: p5): void {

        const balls: Ball[] = [];

        p.setup = function () {
            p.createCanvas(p.windowWidth - 5, p.windowHeight - 5);
            p.colorMode(p.HSB, 360, 100, 100);

            for (let index = 0; index < 10; index++) {
                const ball = {
                    x: p.random(0, p.width),
                    y: p.random(0, p.height),
                    dir_x: p.random(-1, 1),
                    dir_y: p.random(-1, 1),
                };
                balls.push(ball);
            }
        };

        p.windowResized = function () {
            p.resizeCanvas(p.windowWidth - 5, p.windowHeight - 5);
        };

        p.draw = function () {
            p.background(bgColor());
            p.fill(setting.color);
            p.noStroke();

            for (const ball of balls) {
                ball.x += setting.speed * ball.dir_x;
                if (ball.x > p.width || ball.x < 0) {
                    ball.dir_x *= -1;
                }
    
                ball.y += setting.speed * ball.dir_y;
                if (ball.y > p.height || ball.y < 0) {
                    ball.dir_y *= -1;
                }

                p.ellipse(ball.x, ball.y, 100, 100);
            }

        };
    }

    return (
        <div ref={canvasRef}></div>
    );

}
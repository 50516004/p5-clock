import p5 from 'p5';
import { Ball, Setting } from '../lib/definitions';
import useP5 from '../lib/useP5';

export default function Canvas({ setting }: { setting: Setting }) {

    const canvasRef = useP5(sketch);

    // 背景色選択
    function bgColor() {
        return setting.isDark ? "#282c34" : "white";
    }

    function sketch(p: p5): void {

        const balls: Ball[] = [];

        // セットアップ
        p.setup = function () {

            // 描画領域の設定
            p.createCanvas(p.windowWidth - 5, p.windowHeight - 5);
            p.colorMode(p.HSB, 360, 100, 100, 100);

            // ボール生成
            const num = 10;
            for (let index = 0; index < num; index++) {
                const ball = {
                    x: p.random(0, p.width),
                    y: p.random(0, p.height),
                    dir_x: p.random(-1, 1),
                    dir_y: p.random(-1, 1),
                    color: p.color(360 * (index / num), 100, 100, 70).toString(),
                    size: p.random(30, 200),
                };
                balls.push(ball);
            }
        };

        // ウィンドウリサイズ
        p.windowResized = function () {
            p.resizeCanvas(p.windowWidth - 5, p.windowHeight - 5);
        };

        // ドロー
        p.draw = function () {
            // 画面リセット
            p.background(bgColor());
            p.noStroke();

            // ボール
            for (const ball of balls) {
                ball.x += setting.speed * ball.dir_x;
                if (ball.x > p.width || ball.x < 0) {
                    ball.dir_x *= -1;
                }

                ball.y += setting.speed * ball.dir_y;
                if (ball.y > p.height || ball.y < 0) {
                    ball.dir_y *= -1;
                }

                p.fill(ball.color);
                p.ellipse(ball.x, ball.y, ball.size, ball.size);
            }

        };
    }

    return (
        <div ref={canvasRef}></div>
    );

}
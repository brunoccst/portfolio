import "./TimelapseBackground.scss";
import { useEffect, useRef } from "react";
import { Paper, useColorScheme } from "@mui/material";
import mountain from "assets/mountain.png";

const drawStars = (canvas: HTMLCanvasElement, starCount: number) => {
    const ctx = canvas.getContext("2d");
    if (!ctx)
        return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height); // Clear the canvas

    for (let i = 0; i < starCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height * 0.8; // Keep stars mostly in the upper area
        const size = Math.random() * 3 + 1; // Random size between 1 and 4

        ctx.fillStyle = `rgba(255, 255, 255, ${Math.random()})`; // Random opacity for twinkling effect
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
    }
};

export const TimelapseBackground = () => {
    const { mode, systemMode } = useColorScheme();
    const isDarkMode = systemMode === "dark" || mode === "dark";
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight - 1;
        }
    }, [canvasRef, window.innerWidth, window.innerHeight]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const starCount = isDarkMode ? 100 : 10; // Adjust star count based on mode
            drawStars(canvas, starCount);

            const twinkleInterval = setInterval(() => {
                drawStars(canvas, starCount);
            }, 1000); // Redraw stars every second for twinkling effect

            return () => clearInterval(twinkleInterval);
        }
    }, [isDarkMode]);

    return (
        <Paper>
            <div id="timelapse-background" className={isDarkMode ? "dark" : ""}>
                {/* <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }} /> */}
                <img src={mountain} />
            </div>
        </Paper>
    );
};

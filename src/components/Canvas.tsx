import React, {useEffect, useRef} from "react";

const Canvas = ({draw}: { draw: (context: CanvasRenderingContext2D) => void }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef?.current) return;

        const context = canvasRef.current.getContext('2d') as CanvasRenderingContext2D;
        let animationId: number;

        const render = () => {
            animationId = requestAnimationFrame(render);
            draw(context);
        };

        render();

        return () => {
            cancelAnimationFrame(animationId);
        }
    }, [draw]);

    return <canvas ref={canvasRef} width={500} height={500}/>;
}

export default Canvas;

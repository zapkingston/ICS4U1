import { useEffect, useRef } from "react";

type Props = {
  a: number;
  b: number;
  c: number;
  d: number;
};

export default function CubicGraph({ a, b, c, d }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const scale = 15;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(canvas.width, centerY);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, canvas.height);
    ctx.stroke();

    ctx.beginPath();

    for (let px = 0; px < canvas.width; px++) {
      const x = (px - centerX) / scale;
      const y = a * x ** 3 + b * x ** 2 + c * x + d;

      const py = centerY - y * scale;

      if (px === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }

    ctx.strokeStyle = "red";
    ctx.stroke();
  }, [a, b, c, d]);

  return (
    <canvas
      ref={canvasRef}
      width={600}
      height={400}
      className="bg-white rounded-lg shadow-md"
    />
  );
}
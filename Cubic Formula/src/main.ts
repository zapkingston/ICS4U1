import "./style.css";

const form = document.getElementById("cube-form") as HTMLFormElement;
const results = document.getElementById("results") as HTMLDivElement;

const canvas = document.getElementById("graph") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const a = Number(formData.get("a-value"));
  const b = Number(formData.get("b-value"));
  const c = Number(formData.get("c-value"));
  const d = Number(formData.get("d-value"));

  const p = (3 * a * c - b ** 2) / (3 * a ** 2);
  const q = (27 * a ** 2 * d - 9 * a * b * c + 2 * b ** 3) / (27 * a ** 3);

  const discriminant = (q / 2) ** 2 + (p / 3) ** 3;

  let root1: number;
  let root2: number | null = null;
  let root3: number | null = null;
  if (discriminant < 0) {
    const r = Math.sqrt(-p / 3);
    const theta = Math.acos(((3 * q) / (2 * p)) * Math.sqrt(-3 / p));

    const y1 = 2 * r * Math.cos(theta / 3);
    const y2 = 2 * r * Math.cos((theta + 2 * Math.PI) / 3);
    const y3 = 2 * r * Math.cos((theta + 4 * Math.PI) / 3);

    root1 = y1 - b / (3 * a);
    root2 = y2 - b / (3 * a);
    root3 = y3 - b / (3 * a);
  } else if (discriminant > 0) {
    const u = Math.cbrt(-q / 2 + Math.sqrt(discriminant));
    const v = Math.cbrt(-q / 2 - Math.sqrt(discriminant));

    root1 = u + v - b / (3 * a);

    (document.getElementById("r1") as HTMLElement).textContent =
      root1.toFixed(4);
  } else {
    if (p === 0 && q === 0) {
      root1 = -b / (3 * a);
      root2 = root1;
      root3 = root1;
    } else {
      const r1 = Math.cbrt(q / 2);
      const r2 = -2 * r1;

      root1 = r1 - b / (3 * a);
      root2 = r1 - b / (3 * a);
      root3 = r2 - b / (3 * a);
    }
  }
  const equation = `y = ${a}x³ + ${b}x² + ${c}x + ${d}`;

  results.style.display = "flex";

  (document.getElementById("p") as HTMLElement).textContent = p.toFixed(6);
  (document.getElementById("q") as HTMLElement).textContent = q.toFixed(6);
  (document.getElementById("equation") as HTMLElement).textContent = equation;
  (document.getElementById("disc") as HTMLElement).textContent =
    discriminant.toFixed(6);

  (document.getElementById("r1") as HTMLElement).textContent = root1.toFixed(6);

  (document.getElementById("r2") as HTMLElement).textContent =
    root2 !== null ? root2.toFixed(6) : "Complex Number";

  (document.getElementById("r3") as HTMLElement).textContent =
    root3 !== null ? root3.toFixed(6) : "Complex Number";

  /* graph */
  if (ctx) {
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
  }
});

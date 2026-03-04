import './style.css'
const form = document.getElementById("cube-form") as HTMLFormElement

  const formData = new FormData(form);

  const a: number = Number(formData.get("a-value"))
  const b: number = Number(formData.get("b-value"))
  const c: number = Number(formData.get("c-value"))
  const d: number = Number(formData.get("d-value"))

  const p = (3 * a * b - b^2) / (3 * a^2);
  const q = (27 * a^2 * d - 9 * a * b * c + 2 * b^3) / (27 * a^3);
  const discriminate = (q / 2)^2 + (p/3)^3;
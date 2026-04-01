import { useState } from "react";
import CubicInput from "./Components/CubicInput";
import CubicEquation from "./Components/CubicEquation";
import CubicTable from "./Components/CubicTable";
import CubicGraph from "./Components/CubicGraph";
export default function App() {
  const [coeffs, setCoeffs] = useState({ a: 0, b: 0, c: 0, d: 0 });

  const [results, setResults] = useState<{
    p: number;
    q: number;
    discriminant: number;
    root1: number;
    root2: number | null;
    root3: number | null;
  } | null>(null);

  const solve = (a: number, b: number, c: number, d: number) => {
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

    setCoeffs({ a, b, c, d });

    setResults({
      p,
      q,
      discriminant,
      root1,
      root2,
      root3,
    });
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center pt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Cubic Solver</h1>

      <CubicInput onSolve={solve} />

      {results && (
        <div className="flex gap-10 mt-10 items-start">
          <CubicTable
            p={results.p}
            q={results.q}
            discriminant={results.discriminant}
            r1={results.root1}
            r2={results.root2}
            r3={results.root3}
          />

          <div>
            <CubicEquation {...coeffs} />
            <CubicGraph {...coeffs} />
          </div>
        </div>
      )}
    </div>
  );
}
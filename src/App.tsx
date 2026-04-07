import { useState } from "react";
import CubicInput from "./Components/CubicInput";
import CubicEquation from "./Components/CubicEquation";
import CubicGraph from "./Components/CubicGraph";
import CubicTable from "./Components/CubicTable";
import CubicHistory from "./Components/CubicHistory";

type Cubic = {
  a: number;
  b: number;
  c: number;
  d: number;
};

export default function App() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);

  const [history, setHistory] = useState<Cubic[]>([]);

  const save = () => {
    setHistory([...history, { a, b, c, d }]);
  };

  const selectHistory = (na: number, nb: number, nc: number, nd: number) => {
    setA(na);
    setB(nb);
    setC(nc);
    setD(nd);
  };

  const p = (3 * a * c - b ** 2) / (3 * a ** 2);

  const q = (2 * b ** 3 - 9 * a * b * c + 27 * a ** 2 * d) / (27 * a ** 3);

  const discriminant = (q / 2) ** 2 + (p / 3) ** 3;

  let r1: number = 0;
  let r2: number | null = null;
  let r3: number | null = null;

  if (discriminant > 0) {
    const u = Math.cbrt(-q / 2 + Math.sqrt(discriminant));
    const v = Math.cbrt(-q / 2 - Math.sqrt(discriminant));

    const t = u + v;

    r1 = t - b / (3 * a);
    r2 = null;
    r3 = null;
  } else if (discriminant === 0) {
    const u = Math.cbrt(-q / 2);

    const t1 = 2 * u;
    const t2 = -u;

    r1 = t1 - b / (3 * a);
    r2 = t2 - b / (3 * a);
    r3 = r2;
  } else {
    const r = Math.sqrt(-(p ** 3) / 27);
    const phi = Math.acos(-q / (2 * r));

    const m = 2 * Math.cbrt(r);

    const t1 = m * Math.cos(phi / 3);
    const t2 = m * Math.cos((phi + 2 * Math.PI) / 3);
    const t3 = m * Math.cos((phi + 4 * Math.PI) / 3);

    r1 = t1 - b / (3 * a);
    r2 = t2 - b / (3 * a);
    r3 = t3 - b / (3 * a);
  }

  return (
    <div className="p-10 space-y-5">
      <CubicInput
        a={a}
        b={b}
        c={c}
        d={d}
        setA={setA}
        setB={setB}
        setC={setC}
        setD={setD}
        save={save}
      />

      <CubicEquation a={a} b={b} c={c} d={d} />

      <div className="flex gap-5">
        <CubicGraph a={a} b={b} c={c} d={d} />

        <CubicTable
          p={p}
          q={q}
          discriminant={discriminant}
          r1={r1}
          r2={r2}
          r3={r3}
        />
      </div>

      <CubicHistory history={history} onSelect={selectHistory} />
    </div>
  );
}

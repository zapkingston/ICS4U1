import { useState } from "react";

type Props = {
  onSolve: (a: number, b: number, c: number, d: number) => void;
};

export default function CubicInput({ onSolve }: Props) {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onSolve(Number(a), Number(b), Number(c), Number(d));
  };

  return (
    <form onSubmit={submit} className="flex gap-3 items-center">
      <label>a:</label>
      <input
        type="number"
        className="w-16 p-1 border rounded"
        value={a}
        onChange={(e) => setA(e.target.value)}
        required
      />

      <label>b:</label>
      <input
        type="number"
        className="w-16 p-1 border rounded"
        value={b}
        onChange={(e) => setB(e.target.value)}
        required
      />

      <label>c:</label>
      <input
        type="number"
        className="w-16 p-1 border rounded"
        value={c}
        onChange={(e) => setC(e.target.value)}
        required
      />

      <label>d:</label>
      <input
        type="number"
        className="w-16 p-1 border rounded"
        value={d}
        onChange={(e) => setD(e.target.value)}
        required
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded font-bold hover:bg-blue-700">
        Calculate
      </button>
    </form>
  );
}
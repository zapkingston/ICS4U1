type Props = {
  a: number;
  b: number;
  c: number;
  d: number;
  setA: (v: number) => void;
  setB: (v: number) => void;
  setC: (v: number) => void;
  setD: (v: number) => void;
  save: () => void;
};

export default function CubicInput({
  a,
  b,
  c,
  d,
  setA,
  setB,
  setC,
  setD,
  save,
}: Props) {
  return (
    <div className="flex gap-3 items-center">
      <label>a:</label>
      <input
        type="number"
        className="w-16 p-1 border rounded"
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
      />

      <label>b:</label>
      <input
        type="number"
        className="w-16 p-1 border rounded"
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
      />

      <label>c:</label>
      <input
        type="number"
        className="w-16 p-1 border rounded"
        value={c}
        onChange={(e) => setC(Number(e.target.value))}
      />

      <label>d:</label>
      <input
        type="number"
        className="w-16 p-1 border rounded"
        value={d}
        onChange={(e) => setD(Number(e.target.value))}
      />

      <button
        onClick={save}
        className="bg-blue-600 text-white px-4 py-2 rounded font-bold hover:bg-blue-700"
      >
        Save
      </button>
    </div>
  );
}

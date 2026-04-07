type Props = {
  p: number;
  q: number;
  discriminant: number;
  r1: number;
  r2: number | null;
  r3: number | null;
};

export default function CubicTable({ p, q, discriminant, r1, r2, r3 }: Props) {
  return (
    <div className="bg-white p-5 rounded-lg w-52 shadow-md text-left">
      <p>P: {p.toFixed(6)}</p>
      <p>Q: {q.toFixed(6)}</p>
      <p>Discriminant: {discriminant.toFixed(6)}</p>

      <p>Root 1: {r1.toFixed(6)}</p>
      <p>Root 2: {r2 !== null ? r2.toFixed(6) : "Complex Number"}</p>
      <p>Root 3: {r3 !== null ? r3.toFixed(6) : "Complex Number"}</p>
    </div>
  );
}

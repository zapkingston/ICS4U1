type Props = {
  a: number;
  b: number;
  c: number;
  d: number;
};

export default function CubicEquation({ a, b, c, d }: Props) {
  return (
    <p className="font-bold mb-3 text-lg">
      y = {a}x³ + {b}x² + {c}x + {d}
    </p>
  );
}

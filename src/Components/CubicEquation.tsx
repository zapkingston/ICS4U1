type Props = {
  a: number;
  b: number;
  c: number;
  d: number;
};

export default function CubicEquation({ a, b, c, d }: Props) {
  return (
    <p className="Equation">
      y = {a}x³ + {b}x² + {c}x + {d}
    </p>
  );
}

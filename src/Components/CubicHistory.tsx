type Cubic = {
  a: number;
  b: number;
  c: number;
  d: number;
};

type Props = {
  history: Cubic[];
  onSelect: (a: number, b: number, c: number, d: number) => void;
};

export default function CubicHistory({ history, onSelect }: Props) {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md mt-5">
      <h3 className="font-bold mb-3">History</h3>

      <table className="w-full text-left border">
        <thead>
          <tr className="border-b">
            <th>a</th>
            <th>b</th>
            <th>c</th>
            <th>d</th>
          </tr>
        </thead>

        <tbody>
          {history.map((item, i) => (
            <tr
              key={i}
              className="cursor-pointer hover:bg-gray-100"
              onClick={() => onSelect(item.a, item.b, item.c, item.d)}
            >
              <td>{item.a}</td>
              <td>{item.b}</td>
              <td>{item.c}</td>
              <td>{item.d}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

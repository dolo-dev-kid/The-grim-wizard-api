const tiles = [
  ["🌲", "🌲", "🌲", "🌲", "🌲"],
  ["🌲", "⬜", "⬜", "⬜", "🌲"],
  ["🌲", "⬜", "🧙", "⬜", "🌲"],
  ["🌲", "⬜", "⬜", "⬜", "🌲"],
  ["🌲", "🌲", "🌲", "🌲", "🌲"],
];

export default function GameMap() {
  return (
    <div>
      {tiles.map((row, y) => (
        <div key={y}>
          {row.map((tile, x) => (
            <span key={x} style={{ fontSize: "2rem" }}>
              {tile}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

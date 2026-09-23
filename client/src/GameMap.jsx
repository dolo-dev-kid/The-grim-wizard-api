const tiles = [
  ["🌲", "🌲", "🌲", "🌲", "🌲"],
  ["🌲", "⬜", "⬜", "⬜", "🌲"],
  ["🌲", "⬜", "🧙", "⬜", "🌲"],
  ["🌲", "⬜", "⬜", "⬜", "🌲"],
  ["🌲", "🌲", "🌲", "🌲", "🌲"],
];

export default function GameMap() {
  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "monospace",
      }}
    >
      <h1>🧙 Grim Wizard</h1>

      {tiles.map((row, y) => (
        <div key={y}>
          {row.map((tile, x) => (
            <span
              key={x}
              style={{
                fontSize: "2rem",
              }}
            >
              {tile}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

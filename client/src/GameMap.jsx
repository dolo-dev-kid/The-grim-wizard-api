const tiles = [
  ["🌲", "🌲", "🌲", "🌲", "🌲"],
  ["🌲", "⬜", "⬜", "⬜", "🌲"],
  ["🌲", "⬜", "🧙", "⬜", "🌲"],
  ["🌲", "⬜", "⬜", "⬜", "🌲"],
  ["🌲", "🌲", "🌲", "🌲", "🌲"],
];

export default function GameMap() {
  return (
    <div className="game">
      <h1>🧙 Grim Wizard</h1>

      <div className="panel">
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

      <div className="panel">
        <h2>Wizard Stats</h2>
        <p>❤️ Health: 100</p>
        <p>🔮 Mana: 100</p>
        <p>⭐ Level: 1</p>
      </div>

      <div className="controls">
        <button>⚔️ Attack</button>
        <button>🔥 Fireball</button>
        <button>🧪 Drink Potion</button>
      </div>

      <div className="log">
        <h3>Battle Log</h3>
        <p>The Grim Wizard enters the forest...</p>
      </div>
    </div>
  );
}

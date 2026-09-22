import { useEffect, useState } from "react";

export default function GameMap() {
  const [player, setPlayer] = useState({
    x: 300,
    y: 200,
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      setPlayer((prev) => {
        const speed = 10;

        switch (e.key) {
          case "w":
          case "ArrowUp":
            return { ...prev, y: prev.y - speed };

          case "s":
          case "ArrowDown":
            return { ...prev, y: prev.y + speed };

          case "a":
          case "ArrowLeft":
            return { ...prev, x: prev.x - speed };

          case "d":
          case "ArrowRight":
            return { ...prev, x: prev.x + speed };

          default:
            return prev;
        }
      });
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#111",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: player.x,
          top: player.y,
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: "purple",
        }}
      />
    </div>
  );
}

monster is defeated.");
    }
  }

  function enemyAttack() {
    if (enemyHp <= 0) return;

    const damage = Math.floor(Math.random() * 10) + 3;
    const newHp = Math.max(0, playerHp - damage);

    setPlayerHp(newHp);
    setMessage(`Monster attacks for ${damage} damage!`);

    if (newHp === 0) {
      setMessage("Game Over.");
    }
  }

  function resetGame() {
    setPlayerHp(100);
    setEnemyHp(60);
    setMessage("A new monster approaches.");
  }

  return (
    <div className="game">
      <h1>🧙 Grim Wizzard</h1>

      <div className="panel">
        <h2>Wizard</h2>
        <p>HP: {playerHp}</p>
      </div>

      <div className="panel">
        <h2>Dungeon Beast</h2>
        <p>HP: {enemyHp}</p>
      </div>

      <div className="controls">
        <button onClick={castSpell}>Cast Spell</button>
        <button onClick={enemyAttack}>Wait</button>
        <button onClick={resetGame}>Restart</button>
      </div>

      <div className="log">
        <p>{message}</p>
      </div>
    </div>
  );
}

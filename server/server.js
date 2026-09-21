const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    game: "Grim Wizzard"
  });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});

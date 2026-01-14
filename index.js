const express = require("express");
const cors = require("cors");
const banks = require("./banks.json");

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.json({
    ok: true,
    message: "Banks API is running",
    endpoints: ["/banks", "/banks/names", "/banks/:symbol"],
  });
});

// Get all banks
app.get("/banks", (req, res) => {
  // Optional sector filter: /banks?sector=Commercial%20Bank
  const { sector } = req.query;

  if (sector) {
    const filtered = banks.filter(
      (b) => (b.sector || "").toLowerCase() === sector.toLowerCase()
    );
    return res.json(filtered);
  }

  res.json(banks);
});

// Get only bank names
app.get("/banks/names", (req, res) => {
  res.json(banks.map((b) => b.name));
});

// Get single bank by symbol
app.get("/banks/:symbol", (req, res) => {
  const symbol = req.params.symbol.toUpperCase();
  const bank = banks.find((b) => (b.symbol || "").toUpperCase() === symbol);

  if (!bank) return res.status(404).json({ error: "Bank not found" });
  res.json(bank);
});

// IMPORTANT for Render: use process.env.PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

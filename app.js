const express = require("express");
require('dotenv').config();
const authRoutes = require("./routes/auth");
const roomRoutes = require("./routes/rooms");
const logger = require("./middleware/logger");


const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(logger);

app.get("/ping", (req, res) => res.send("pong"));

app.use("/auth", authRoutes);
app.use("/rooms", roomRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route non trouvée."});
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const TOKEN = "ufGaGXDPo2f5Uft4BF6e";

app.get("/", (req, res) => {
  res.send("ARKZZ BOT ACTIVE 🚀");
});

app.post("/webhook", async (req, res) => {
  console.log("DATA:", req.body);

  const message = req.body.data?.message;
  const sender = req.body.data?.sender;

  if (!message) return res.send("OK");

  let reply = "Halo kak 👋 ketik *menu*";

  if (message.toLowerCase() === "menu") {
    reply = `🔥 *ARKZZ STORE MENU*
1. Booster
2. Joki Roblox
3. Beli Akun`;
  }

  await axios.post("https://api.fonnte.com/send", {
    target: sender,
    message: reply,
  }, {
    headers: { Authorization: TOKEN },
  });

  res.send("OK");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running 🚀");
});

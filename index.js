const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const TOKEN = "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";

// 🔥 ROOT (buat test Railway)
app.get("/", (req, res) => {
  res.send("ARKZZ BOT ACTIVE 🚀");
});

// 🔥 WEBHOOK
app.post("/webhook", async (req, res) => {
  console.log("DATA MASUK:", JSON.stringify(req.body, null, 2));

  // 🔥 SUPPORT SEMUA FORMAT FONNTE
  const messageRaw =
    req.body.data?.message ||
    req.body.message ||
    "";

  const sender =
    req.body.data?.sender ||
    req.body.sender ||
    "";

  const message = messageRaw.toLowerCase();

  console.log("MESSAGE:", message);
  console.log("SENDER:", sender);

  if (!message || !sender) {
    console.log("❌ Message atau sender kosong");
    return res.send("OK");
  }

  let reply = `Halo kak 👋
Selamat datang di *ARKZZ OFFICIAL STORE* 👑

Ketik *menu* untuk melihat produk 🔥`;

  // 🔥 MENU
  if (message === "menu") {
    reply = `🔥 *ARKZZ STORE MENU*

1️⃣ ARKZZ VIP BOOSTER V2
2️⃣ FFH4X MODULE
3️⃣ JOKI ROBLOX
4️⃣ BELI AKUN ROBLOX
5️⃣ KONTAK ADMIN

Ketik angka ya 👇`;
  }

  // 🔥 BOOSTER
  else if (message === "1") {
    reply = `🎮 *ARKZZ VIP BOOSTER V2*

⚡ Optimasi gaming premium
🔥 Anti lag + FPS stabil
🧠 AI Smart Optimization
📡 Ping stabil
👆 Ultra Touch Boost
❄️ Anti overheat

✔️ Support Android 10–14
✔️ Non-root bisa

💸 Ketik *buy booster*`;
  }

  // 🔥 FFH4X
  else if (message === "2") {
    reply = `🎯 *FFH4X MODULE*

🔥 Aim lebih stabil
⚡ Sensitivitas meningkat
🎮 Gameplay lebih smooth
💀 Lebih mudah headshot

💸 Ketik *buy ffh4x*`;
  }

  // 🔥 JOKI
  else if (message === "3") {
    reply = `🤖 *JOKI ROBLOX*

🔥 Jasa joki profesional
⚡ Cepat & aman
👤 Admin: Raps

💬 Ketik *joki* untuk order`;
  }

  // 🔥 AKUN
  else if (message === "4") {
    reply = `🛒 *AKUN ROBLOX*

🔥 Banyak pilihan akun
💎 Item rare tersedia
⚡ Ready stok

💬 Ketik *akun*`;
  }

  // 🔥 ADMIN
  else if (message === "5") {
    reply = `📞 *KONTAK ADMIN*

👑 Owner (Arkzz):
https://wa.me/6285813226412

🤖 Admin Joki (Raps):
https://wa.me/6285804203945`;
  }

  // 🔥 BUY BOOSTER
  else if (message === "buy booster") {
    reply = `🔥 Order ARKZZ BOOSTER

Klik:
https://wa.me/6285813226412?text=Halo%20Admin%20Saya%20mau%20buy%20ARKZZ%20VIP%20BOOSTER%20V2`;
  }

  // 🔥 BUY FFH4X
  else if (message === "buy ffh4x") {
    reply = `🔥 Order FFH4X

Klik:
https://wa.me/6285813226412?text=Halo%20Admin%20Saya%20mau%20buy%20FFH4X`;
  }

  // 🔥 JOKI
  else if (message === "joki") {
    reply = `🤖 Order Joki Roblox

Klik:
https://wa.me/6285804203945?text=Halo%20Saya%20mau%20joki%20Roblox`;
  }

  // 🔥 AKUN
  else if (message === "akun") {
    reply = `🛒 Beli Akun Roblox

Klik:
https://wa.me/6285813226412?text=Halo%20Saya%20mau%20beli%20akun%20Roblox`;
  }

  // 🔥 DEFAULT
  else {
    reply = `❓ Perintah tidak dikenali

Ketik *menu* ya 👇`;
  }

  // 🔥 KIRIM KE FONNTE
  try {
    const response = await axios.post(
      "https://api.fonnte.com/send",
      {
        target: sender,
        message: reply,
      },
      {
        headers: {
          Authorization: TOKEN,
        },
      }
    );

    console.log("✅ RESPON FONNTE:", response.data);
  } catch (err) {
    console.log("❌ ERROR FONNTE:", err.response?.data || err.message);
  }

  res.send("OK");
});

// 🔥 PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running 🚀");
});

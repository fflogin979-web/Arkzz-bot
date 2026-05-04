const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const TOKEN = "ufGaGXDPo2f5Uft4BF6e";

// 🔥 ROOT
app.get("/", (req, res) => {
  res.send("ARKZZ BOT ACTIVE 🚀");
});

// 🔥 WEBHOOK
app.post("/webhook", async (req, res) => {
  console.log("DATA MASUK:", req.body);

  const message = req.body.data?.message?.toLowerCase();
  const sender = req.body.data?.sender;

  if (!message) return res.send("OK");

  let reply = `Halo kak 👋
Selamat datang di *ARKZZ OFFICIAL STORE* 👑

Ketik *menu* untuk melihat produk ya 🔥`;

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

⚡ Module optimasi gaming premium
🔥 Anti lag + FPS stabil
🧠 AI Smart Optimization
📡 Ping stabil
👆 Ultra Touch Boost
❄️ Anti overheat

✔️ Support Android 10–14
✔️ Bisa tanpa root (basic)

💸 Minat? ketik *buy booster*`;
  }

  // 🔥 FFH4X
  else if (message === "2") {
    reply = `🎯 *FFH4X MODULE*

🔥 Aim assist lebih stabil
⚡ Sensitivitas meningkat
🎮 Gameplay lebih smooth
💀 Lebih mudah headshot

⚠️ Gunakan dengan bijak

💸 Minat? ketik *buy ffh4x*`;
  }

  // 🔥 JOKI ROBLOX
  else if (message === "3") {
    reply = `🤖 *JOKI ROBLOX*

🔥 Jasa joki profesional
⚡ Cepat & terpercaya
🎮 Cocok untuk semua game Roblox

👤 Admin Joki: Rapi / Raps

💬 Order? ketik *joki*`;
  }

  // 🔥 AKUN ROBLOX
  else if (message === "4") {
    reply = `🛒 *AKUN ROBLOX*

🔥 Banyak pilihan akun
💎 Level tinggi / item rare
⚡ Ready stok

💬 Minat? ketik *akun*`;
  }

  // 🔥 ADMIN
  else if (message === "5") {
    reply = `📞 *KONTAK ADMIN*

👑 Owner: Arkzz
👉 https://wa.me/6285813226412

🤖 Admin Joki: Raps
👉 https://wa.me/6285804203945`;
  }

  // 🔥 BUY BOOSTER
  else if (message === "buy booster") {
    reply = `🔥 Order ARKZZ VIP BOOSTER V2

Klik link di bawah untuk order 👇
https://wa.me/6285813226412?text=Halo%20Admin%20Saya%20mau%20buy%20ARKZZ%20VIP%20BOOSTER%20V2`;
  }

  // 🔥 BUY FFH4X
  else if (message === "buy ffh4x") {
    reply = `🔥 Order FFH4X MODULE

Klik link di bawah 👇
https://wa.me/6285813226412?text=Halo%20Admin%20Saya%20mau%20buy%20FFH4X%20MODULE`;
  }

  // 🔥 JOKI
  else if (message === "joki") {
    reply = `🤖 Order Joki Roblox

Hubungi admin joki 👇
https://wa.me/6285804203945?text=Halo%20Saya%20mau%20joki%20Roblox`;
  }

  // 🔥 AKUN
  else if (message === "akun") {
    reply = `🛒 Beli Akun Roblox

Hubungi admin 👇
https://wa.me/6285813226412?text=Halo%20Saya%20mau%20beli%20akun%20Roblox`;
  }

  // 🔥 DEFAULT
  else {
    reply = `❓ Perintah tidak dikenali

Ketik *menu* untuk melihat produk ya 👇`;
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

    console.log("RESPON FONNTE:", response.data);
  } catch (err) {
    console.log("ERROR KIRIM:", err.response?.data || err.message);
  }

  res.send("OK");
});

// 🔥 PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running 🚀");
});

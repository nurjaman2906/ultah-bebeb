const PASSWORD = "24102006";

const lockScreen = document.getElementById("lockScreen");
const content = document.getElementById("content");
const password = document.getElementById("password");
const openBtn = document.getElementById("openBtn");
const error = document.getElementById("error");

function unlock() {
  if (password.value === PASSWORD) {
    lockScreen.classList.add("hidden");
    content.classList.remove("hidden");
    createHearts(22);
    window.scrollTo(0, 0);
  } else {
    error.textContent = "Tanggalnya belum tepat, bebeb 😭";
    password.value = "";
    password.focus();
  }
}
openBtn.addEventListener("click", unlock);
password.addEventListener("keydown", e => {
  if (e.key === "Enter") unlock();
});

function scrollToId(id) {
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

function openGift() {
  document.getElementById("giftBox").style.transform = "scale(1.12) rotate(3deg)";
  document.getElementById("giftMessage").textContent =
    "Surprise! Website kecil ini dibuat khusus buat kamu, bebeb. 💗";
  createHearts(18);
}

const reasons = [
  "Cara kamu membuat hari biasa terasa spesial.",
  "Cara kamu tetap peduli walaupun kita sedang berjauhan.",
  "Senyummu yang entah kenapa selalu berhasil bikin aku ikut senyum.",
  "Hal-hal kecil tentang kamu yang mungkin nggak kamu sadari.",
  "Karena sampai sekarang, kamu masih menjadi seseorang yang ingin aku temui."
];
let reasonIndex = 0;

function nextReason() {
  reasonIndex = (reasonIndex + 1) % reasons.length;
  document.getElementById("reasonNumber").textContent =
    String(reasonIndex + 1).padStart(2, "0");
  document.getElementById("reasonText").textContent = reasons[reasonIndex];
}

function openSecret() {
  const secret = document.getElementById("secret");
  secret.classList.remove("hidden");
  createHearts(20);
}

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
musicBtn.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicBtn.textContent = "Ⅱ";
      document.querySelector(".disc").style.animationPlayState = "running";
    } catch {
      musicBtn.textContent = "▶";
      alert("Tambahkan file found-you.mp3 ke folder website terlebih dahulu.");
    }
  } else {
    music.pause();
    musicBtn.textContent = "▶";
    document.querySelector(".disc").style.animationPlayState = "paused";
  }
});

function createHearts(amount=8) {
  const container = document.getElementById("hearts");
  for (let i=0;i<amount;i++) {
    const h = document.createElement("span");
    h.className = "heart";
    h.textContent = Math.random() > .25 ? "♡" : "♥";
    h.style.left = Math.random()*100 + "%";
    h.style.fontSize = (12 + Math.random()*24) + "px";
    h.style.animationDuration = (5 + Math.random()*6) + "s";
    h.style.animationDelay = Math.random()*2 + "s";
    container.appendChild(h);
    setTimeout(() => h.remove(), 13000);
  }
}

function celebrate() {
  createHearts(80);
  document.querySelector(".final h2").textContent = "I Love You, Bebeb! 💗";
  document.querySelector(".final-love").textContent =
    "Sampai nanti jarak ini berubah menjadi pertemuan. ♡";
}
setInterval(() => {
  if (!content.classList.contains("hidden")) createHearts(2);
}, 2800);

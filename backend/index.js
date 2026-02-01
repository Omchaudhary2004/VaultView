const nacl = require("tweetnacl");
const { generateMnemonic, mnemonicToSeedSync } = require("bip39");
const { derivePath } = require("ed25519-hd-key");
const { Keypair } = require("@solana/web3.js");
const express = require("express");
const cors = require("cors");
const {
  Connection,
  PublicKey,
  clusterApiUrl,
  LAMPORTS_PER_SOL

} = require("@solana/web3.js");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

/* ================= GLOBAL STATE (DEMO ONLY) ================= */
let mnemonic = null;
let seed = null;
let walletIndex = 0;

/* ================= HOME ================= */
app.get("/", (req, res) => {
  res.send("<h1>VaultView API Running 🚀</h1>");
});

/* ================= INIT MNEMONIC ================= */
app.get("/init-wallet", (req, res) => {
  mnemonic = generateMnemonic();
  seed = mnemonicToSeedSync(mnemonic);
  walletIndex = 0;

  res.json({
    message: "Wallet initialized",
    mnemonic
  });
});

/* ================= ADD / CREATE NEXT WALLET ================= */
/* Called every time "Add Wallet" button is clicked */
app.post("/add-wallet", (req, res) => {
  const { muword } = req.body;

  if (!muword) {
    return res.status(400).json({ error: "Mnemonic required" });
  }

  /* Initialize seed only once */
  if (!seed) {
    seed = mnemonicToSeedSync(muword);
    walletIndex = 0;
  }

  const path = `m/44'/501'/${walletIndex}'/0'`;
  const derivedSeed = derivePath(path, seed.toString("hex")).key;

  const keypair = nacl.sign.keyPair.fromSeed(derivedSeed);
  const solanaKeypair = Keypair.fromSecretKey(keypair.secretKey);

  const wallet = {
    index: walletIndex,
    path,
    publicKey: solanaKeypair.publicKey.toBase58(),
    privateKey: Buffer.from(keypair.secretKey).toString("hex")
  };

  walletIndex++; // ✅ VERY IMPORTANT

  res.json({
    message: "Wallet created",
    wallet
  });
});

/* ================= CHECK BALANCE (DUMMY) ================= */
app.post("/check-balance", (req, res) => {
  const { privateKey } = req.body;

  if (!privateKey) {
    return res.status(400).json({ error: "Private key required" });
  }

  /* Dummy balance for now */
  res.json({
    balance: "$100"
  });
});

app.post("/balance_get",async  (req, res) => {
  const { key_p, pa } = req.body; 

  // const balance = key_p;
  const connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");
  const address = new PublicKey(key_p);
  const balance = await connection.getBalance(address);

  res.json({ reply: balance });
});


/* ================= SERVER ================= */
app.listen(port, () => {
  console.log(`Server running → http://localhost:${port}`);
});

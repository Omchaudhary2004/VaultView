import Nav_bar from "./navbars";
import Footers from "./footer";
import { useParams } from "react-router-dom";
import "./wallet.css";
import { useState } from "react";
import axios from "axios";

function Wallet_info() {
  const { name } = useParams();

  const [showNewUI, setShowNewUI] = useState(false);
  const [text, setText] = useState("");
  const [mnemonicWords, setMnemonicWords] = useState([]);
  const [wallets, setWallets] = useState([]); // Store multiple wallets
  // const [balance, setBalance] = useState("0.00"); // Balance state
  const [privkey, privkeyy] = useState('');
  const [balance, setBalance] = useState(0.00);
  const isEmpty = text.trim().length === 0;


  

  const path =
    name === "Solana"
      ? "m/44'/501'/0'/0'"
      : "m/44'/60'/0'/0/0";


    const handleLog = async() => {
    if (!privkey) {
    alert("Please enter private key");
    return;
    }
    const response = await axios.post("http://localhost:3000/balance_get", {
      key_p: privkey,
      pa: path
    });

    setBalance(response.data.reply);

  };
  /* Generate mnemonic */
  const generateWallet = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/init-wallet");
      const data = await res.json();
      setText(data.mnemonic);
    } catch (error) {
      console.error("Error generating wallet:", error);
      alert("Failed to generate wallet. Please try again.");
    }
  };

  /* Add wallet - creates first wallet from mnemonic */
  const addWallet = async (e) => {
    e.preventDefault();

    const words = text.split(" ");
    setMnemonicWords(words);

    try {
      const res = await axios.post("http://localhost:3000/add-wallet", {
        muword: text,
      });

      setWallets([
        {
          publicKey: res.data.wallet.publicKey,
          privateKey: res.data.wallet.privateKey,
        },
      ]);
      setShowNewUI(true);
    } catch (error) {
      console.error("Error adding wallet:", error);
      alert("Failed to add wallet. Please check your mnemonic and try again.");
    }
  };

  /* Add next wallet - creates additional wallets from same mnemonic */
  const addNextWallet = async () => {
    try {
      const res = await axios.post("http://localhost:3000/add-wallet", {
        muword: text,
      });

      setWallets([
        ...wallets,
        {
          publicKey: res.data.wallet.publicKey,
          privateKey: res.data.wallet.privateKey,
        },
      ]);
    } catch (error) {
      console.error("Error adding new wallet:", error);
      alert("Failed to add new wallet. Please try again.");
    }
  };

  /* Fetch balance using private key */
  const fetchBalance = async (privateKey) => {
    try {
      const res = await axios.post("http://localhost:3000/check-balance", {
        privateKey: privateKey || balance,
      });
      setBalance(res.data.balance.replace('$', ''));
      alert(`Balance fetched: ${res.data.balance}`);
    } catch (error) {
      console.error("Error fetching balance:", error);
      alert("Failed to fetch balance. Please try again.");
    }
  };

  /* Copy to clipboard */
  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`${label} copied to clipboard!`);
    }).catch((err) => {
      console.error("Failed to copy:", err);
    });
  };

  return (
    <>
      <Nav_bar />

      {!showNewUI ? (
        /* ===== INITIAL SCREEN ===== */
        <div className="content">
          <h1>Enter or Generate a {name} Wallet</h1>

          <form
            className="wallet-form"
            onSubmit={isEmpty ? generateWallet : addWallet}
          >
            <input
              className="inputfeild"
              placeholder="Enter mnemonic phrase"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <button type="submit">
              {isEmpty ? "Generate Wallet" : "Add Wallet"}
            </button>
          </form>
        </div>
      ) : (
        /* ===== DASHBOARD ===== */
        <div className="center-wrapper">
          <div className="card-container">
            {/* ---- TOP ROW ---- */}
            <div className="top-row">
              <div className="card">
                <h3>Secret Recovery Phrase</h3>
                <div className="mnemonic-grid">
                  {mnemonicWords.map((w, i) => (
                    <span key={i}>
                      {i + 1}. {w}
                    </span>
                  ))}
                </div>
              </div>

              {/* <div className="card">
                <h3>Total Balance</h3>
                <input
                  type="text"
                  className="balance-input"
                  placeholder="Enter private key (optional)"
                  value={balance}
                  onChange={(e) => {
                    setBalance(e.target.value);
                  }}
                />
                <button 
                  className="fetch-balance-btn"
                  onClick={() => fetchBalance(balance)}
                >
                  Fetch Balance
                </button>
                <div className="balance">${balance}</div>
              </div> */}
              <div className="card">
                <h3>Total Balance</h3>
                <input type="text" className="balance-input" placeholder="Enter Your Public Key" value={privkey}  onChange={(e) => privkeyy(e.target.value)}  />
                <button className="fetch-balance-btn" onClick={handleLog}>
                  Fetch Balance
                </button>
                <div className="balance">${balance}</div>

              </div>
            </div>

            {/* ---- BOTTOM ROW ---- */}
            <div className="bottom-row">
              <div className="card wide">
                <button className="add-wallet-btn" onClick={addNextWallet}>
                  ➕ Add New Wallet
                </button>

                {/* Display all wallets */}
                {wallets.map((wallet, index) => (
                  <div key={index} className="ittr_account">
                    {wallets.length > 1 && (
                      <h3 style={{ margin: "1rem 0 0.5rem 0" }}>
                        Wallet {index + 1}
                      </h3>
                    )}

                    <div className="keys-row">
                      <div className="key-section">
                        <div className="key-header">
                          <h4>Public Key</h4>
                          <button 
                            className="copy-btn"
                            onClick={() => copyToClipboard(wallet.publicKey, "Public Key")}
                            title="Copy to clipboard"
                          >Copy</button>
                        </div>
                        <p className="mono">{wallet.publicKey}</p>
                      </div>

                      <div className="key-section">
                        <div className="key-header">
                          <h4>Private Key</h4>
                          <button 
                            className="copy-btn"
                            onClick={() => copyToClipboard(wallet.privateKey, "Private Key")}
                            title="Copy to clipboard"
                          >
                            Copy
                          </button>
                        </div>
                        <p
                          className="mono blur"
                          onClick={(e) => {
                            e.target.classList.toggle("blur");
                          }}
                          title="Click to reveal"
                        >
                          {wallet.privateKey}
                        </p>
                      </div>
                    </div>

                    {index < wallets.length - 1 && (
                      <hr
                        style={{
                          border: "none",
                          borderTop: "1px solid rgba(255,255,255,0.2)",
                          margin: "2rem 0",
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="footer">
        <Footers />
      </footer>
    </>
  );
}

export default Wallet_info;
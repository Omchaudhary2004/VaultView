// import React, { useState } from 'react';

// function InputCheck() {
//   const [text, setText] = useState("");

//   // Check if trimmed length is 0
//   const isEmpty = text.trim().length === 0;

//   return (
//     <div>
//       <input 
//         type="text" 
//         value={text} 
//         onChange={(e) => setText(e.target.value)} 
//         placeholder="Type something..."
//       />
      
//       {/* Conditionally show a message */}
//       {isEmpty ? <p style={{color: 'red'}}>Input is empty!</p> : <p>Great, you're typing!</p>}
      
//       {/* Disable button if empty */}
//       <button disabled={isEmpty}>Submit</button>
//     </div>
//   );
// }
// export default InputCheck;


import { useState } from "react";

function Wallet() {
  const [wallet, setWallet] = useState(null);
  const [mnemonic, setMnemonic] = useState("");
  

  // 1️⃣ Initialize wallet (mnemonic + seed)
  const initWallet = async () => {
    const res = await fetch("http://localhost:3000/init-wallet");
    const data = await res.json();
    setMnemonic(data.mnemonic);
  };

  // 2️⃣ Generate new wallet (index increases)
  const newWallet = async () => {
    const res = await fetch("http://localhost:3000/new-wallet");
    const data = await res.json();
    setWallet(data);
  };

  return (
    <div>
      <h1>VaultView</h1>

      <button onClick={initWallet}>Init Wallet</button>
      <button onClick={newWallet}>New Wallet</button>

      {mnemonic && (
        <div>
          <h3>Mnemonic</h3>
          <p>{mnemonic}</p>
        </div>
      )}

      {wallet && (
        <div>
          <h3>Wallet #{wallet.index}</h3>
          <p><b>Path:</b> {wallet.path}</p>
          <p><b>Public Key:</b> {wallet.publicKey}</p>
        </div>
      )}
    </div>
  );
}

export default Wallet;

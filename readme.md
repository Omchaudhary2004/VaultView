# VaultView – Mnemonic-Based Wallet Balance Checker

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5+-646CFF?logo=vite)
![Solana](https://img.shields.io/badge/Solana-Compatible-14F195?logo=solana)

VaultView is a Web3 utility that enables users to restore a hierarchical deterministic (HD) wallet using a mnemonic (recovery phrase) and view the derived wallet addresses along with their balances.

The project implements industry-standard cryptographic practices such as **BIP39** mnemonic generation, **BIP44** derivation paths, and **Ed25519** keypair derivation, making it compatible with Solana wallets. VaultView is built primarily for educational and developer use, helping users understand how modern crypto wallets derive multiple accounts from a single seed.

## 🚀 Features

- ✅ Restore wallet using a BIP39 mnemonic phrase
- ✅ Derive multiple accounts using BIP44 path (`m/44'/501'`)
- ✅ Generate Ed25519 keypairs compatible with Solana
- ✅ Display derived public wallet addresses
- ✅ Fetch and display wallet balances
- ✅ Simple, clean UI for easy interaction

## 🧠 Tech Stack

- **React + Vite** – Frontend framework and build tool
- **tweetnacl** – Cryptographic key generation
- **bip39** – Mnemonic & seed handling
- **ed25519-hd-key** – HD wallet derivation
- **@solana/web3.js** – Solana wallet interaction

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/vaultview.git

# Navigate to project directory
cd vaultview

# Install dependencies
npm install
```

## 🛠️ Usage

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
#RUN BACKEND
```bash
cd backend

node index.js
```
## 📖 How It Works

1. **Mnemonic Input**: User enters a 12 or 24-word BIP39 mnemonic phrase
2. **Seed Generation**: The mnemonic is converted to a seed using BIP39
3. **Key Derivation**: Ed25519 keypairs are derived using BIP44 path (`m/44'/501'/x'/0'`)
4. **Address Display**: Public keys are displayed as Solana wallet addresses
5. **Balance Fetching**: Live balances are fetched from Solana RPC endpoints

## 🔐 Security Best Practices

This application follows these security principles:

- 🔒 Mnemonics are processed entirely **client-side**
- 🚫 No data is ever **stored, logged, or transmitted**
- ⚠️ Keys are held in memory only during the session
- 🔄 Page refresh clears all sensitive data

## ⚠️ Security Disclaimer

**This project is intended for educational and development purposes only.**

- Mnemonic phrases are never stored, logged, or transmitted
- Do NOT use real wallets containing funds
- Always use test wallets or devnet for experimentation
- This tool should not be used in production environments with real assets

## 📚 Learning Outcomes

By exploring VaultView, you'll gain understanding of:

- 🧩 HD wallet architecture and BIP standards
- 🔑 Working with mnemonic phrases and derivation paths
- 🌐 Solana keypair generation and balance fetching
- 🔐 Secure handling of sensitive cryptographic data in Web3 applications
- ⚡ Building React applications with crypto libraries

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [BIP39 Standard](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki)
- [BIP44 Standard](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki)
- [Solana Documentation](https://docs.solana.com/)

## 📞 Contact

For questions or feedback, please open an issue on GitHub.

---

**⚠️ Remember: Never share your mnemonic phrase with anyone. This tool is for educational purposes only.**

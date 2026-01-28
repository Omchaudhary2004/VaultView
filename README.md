#VaultView – Mnemonic-Based Wallet Balance Checker

VaultView is a Web3 utility that enables users to restore a hierarchical deterministic (HD) wallet using a mnemonic (recovery phrase) and view the derived wallet addresses along with their balances.

The project implements industry-standard cryptographic practices such as BIP39 mnemonic generation, BIP44 derivation paths, and Ed25519 keypair derivation, making it compatible with Solana wallets. VaultView is built primarily for educational and developer use, helping users understand how modern crypto wallets derive multiple accounts from a single seed.

🚀 Features

Restore wallet using a BIP39 mnemonic phrase

Derive multiple accounts using BIP44 path (m/44'/501')

Generate Ed25519 keypairs compatible with Solana

Display derived public wallet addresses

Fetch and display wallet balances

Simple, clean UI for easy interaction

🧠 Tech Stack

React + Vite (Frontend)

tweetnacl (Cryptographic key generation)

bip39 (Mnemonic & seed handling)

ed25519-hd-key (HD wallet derivation)

@solana/web3.js (Solana wallet interaction)

⚠️ Security Disclaimer

This project is intended for educational and development purposes only.
Mnemonic phrases are never stored, logged, or transmitted.
Do NOT use real wallets containing funds.

📚 Learning Outcomes

Understanding HD wallet architecture

Working with mnemonic phrases and derivation paths

Solana keypair generation and balance fetching

Secure handling of sensitive cryptographic data in Web3 applications

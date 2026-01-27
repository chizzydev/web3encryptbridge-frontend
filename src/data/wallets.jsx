// src/data/wallets.js

export const WALLET_CATEGORIES = {
  secure: {
    description:
      'Refers to the safety and protection of assets, data, and transactions in the crypto space. Investors should prioritize platforms with robust security measures like encryption and multi-factor authentication.',
  },
  dapps: {
    description:
      'Decentralized Applications (DApps) run on blockchain networks like Ethereum. They are open-source, decentralized, and often use smart contracts. Investors should look for DApps with strong use cases and active user bases.',
  },
  kyc: {
    description:
      'Know Your Customer (KYC) is a process used by platforms to verify the identity of their users. It helps prevent fraud and ensures compliance with regulations. Investors should ensure platforms they use are KYC-compliant to avoid legal risks.',
  },
  encrypt: {
    description:
      'The process of converting data into a secure format to prevent unauthorized access. Investors should ensure their wallets and platforms use strong encryption to protect their assets.',
  },
  igo: {
    description:
      "Initial Game Offering (IGO) is a fundraising method for blockchain-based gaming projects. Investors can purchase in-game assets or tokens early. Research the project's team, roadmap, and community before investing.",
  },
  launchpad: {
    description:
      'A platform that helps new crypto projects raise funds and gain visibility. Investors can participate in token sales early. Look for launchpads with a track record of successful projects.',
  },
  staking: {
    description:
      'The process of locking up crypto assets to support a blockchain network and earn rewards. Investors should consider the staking rewards, lock-up periods, and risks involved.',
  },
  farming: {
    description:
      'A DeFi practice where investors provide liquidity to earn rewards. It can be highly profitable but also risky due to smart contract vulnerabilities and market volatility.',
  },
  crypto: {
    description:
      'Short for cryptocurrency, a digital or virtual currency that uses cryptography for security. Investors should diversify their portfolio and stay informed about market trends.',
  },
  defi: {
    description:
      'Decentralized Finance (DeFi) refers to financial services built on blockchain technology, eliminating intermediaries. Investors should research the risks and rewards of DeFi protocols before participating.',
  },
  web3: {
    description:
      'The next generation of the internet, powered by blockchain technology. It aims to create a decentralized and user-controlled web. Investors should explore opportunities in Web3 infrastructure and applications.',
  },
  ieo: {
    description:
      "Initial Exchange Offering (IEO) is a fundraising method where tokens are sold on a cryptocurrency exchange. Investors should evaluate the exchange's reputation and the project's potential.",
  },
  ido: {
    description:
      "Initial DEX Offering (IDO) is a fundraising method where tokens are sold on a decentralized exchange. Investors should assess the project's fundamentals and the DEX's credibility.",
  },
  token: {
    description:
      'A digital asset or utility that exists on a blockchain. Tokens can represent ownership, access rights, or other values. Investors should evaluate the tokenomics and use cases of a token before investing.',
  },
  gaming: {
    description:
      'Blockchain gaming involves games that use blockchain technology for in-game assets and economies. Investors should look for games with strong communities and sustainable economies.',
  },
  nft: {
    description:
      'Non-Fungible Tokens (NFTs) are unique digital assets that represent ownership of items like art, collectibles, or in-game items. Investors should research the rarity, utility, and demand for NFTs before investing.',
  },
};

export const WALLETS = [
  { id: 1, name: 'Exodus', icon: '/images/wallet/exodus.png' },
  { id: 2, name: 'Trust', icon: '/images/wallet/trust.png' },
  { id: 3, name: 'Wallet connect', icon: '/images/wallet/connect.png' },
  { id: 4, name: 'Nano x plus', icon: '/images/wallet/nano.png' },
  { id: 5, name: 'Tangem', icon: '/images/wallet/tangem.png' },
  { id: 6, name: 'Arculus', icon: '/images/wallet/arculus.png' },
  { id: 7, name: 'Trezor', icon: '/images/wallet/trezor.png' },
  { id: 8, name: 'Xaman', icon: '/images/wallet/xaman.png' },
  { id: 9, name: 'Bitbox02', icon: '/images/wallet/bitbox02.png' },
  { id: 10, name: 'Lobstr', icon: '/images/wallet/lobstr.png' },
  { id: 11, name: 'Atomic', icon: '/images/wallet/atomic.png' },
  { id: 12, name: 'Metamask', icon: '/images/wallet/metamask.png' },
  { id: 13, name: 'Rainbow', icon: '/images/wallet/rainbow.png' },
  { id: 14, name: 'Argent', icon: '/images/wallet/argent.png' },
  { id: 15, name: 'Gnosis Safe Multisig', icon: '/images/wallet/gnosis-safe.png' },
  { id: 16, name: 'Crypto.com | DeFi Wallet', icon: '/images/wallet/crypto.png' },
  { id: 17, name: 'Pillar', icon: '/images/wallet/pillar.png' },
  { id: 18, name: 'Anchor', icon: '/images/wallet/anchor.png' },
  { id: 19, name: 'ONTO', icon: '/images/wallet/onto.png' },
  { id: 20, name: 'TokenPocket', icon: '/images/wallet/tokenpocket.png' },
  { id: 21, name: 'MathWallet', icon: '/images/wallet/math-wallet.png' },
  { id: 22, name: 'BitPay', icon: '/images/wallet/bitpay.png' },
  { id: 23, name: 'Maiar', icon: '/images/wallet/maiar.png' },
  { id: 24, name: 'Ledger Live', icon: '/images/wallet/ledgerlive.png' },
  { id: 25, name: 'Walleth', icon: '/images/wallet/walleth.png' },
  { id: 26, name: 'Authereum', icon: '/images/wallet/authereum.png' },
  { id: 27, name: 'Huobi Wallet', icon: '/images/wallet/huobi.png' },
  { id: 28, name: 'Eidoo', icon: '/images/wallet/eidoo.png' },
  { id: 29, name: 'MYKEY', icon: '/images/wallet/mykey.png' },
  { id: 30, name: 'Loopring Wallet', icon: '/images/wallet/loopring.png' },
  { id: 31, name: 'TrustVault', icon: '/images/wallet/trustvault.png' },
  { id: 32, name: 'Coin98', icon: '/images/wallet/coin98.png' },
  { id: 33, name: 'CoolWallet S', icon: '/images/wallet/coolwallet.png' },
  { id: 34, name: 'Alice', icon: '/images/wallet/alice.png' },
  { id: 35, name: 'AlphaWallet', icon: '/images/wallet/alphawallet.png' },
  { id: 36, name: 'GridPlus', icon: '/images/wallet/gridplus.png' },
  { id: 37, name: 'CYBAVO Wallet', icon: '/images/wallet/cybavowallet.png' },
  { id: 38, name: 'Tokenary', icon: '/images/wallet/tokenary.png' },
  { id: 39, name: 'Wazirx', icon: '/images/wallet/wazirx.png' },
  { id: 40, name: 'D’CENT Wallet', icon: '/images/wallet/dcentwallet.png' },
  { id: 41, name: 'ZelCore', icon: '/images/wallet/zelcore.png' },
  { id: 42, name: 'Nash', icon: '/images/wallet/nash.png' },
  { id: 43, name: 'Coinomi', icon: '/images/wallet/coinomi.png' },
  { id: 44, name: 'Torus', icon: '/images/wallet/torus.png' },
  { id: 45, name: 'Spatium', icon: '/images/wallet/spatium.png' },
  { id: 46, name: 'SafePal', icon: '/images/wallet/safepal.png' },
  { id: 47, name: 'Equal', icon: '/images/wallet/equal.png' },
  { id: 48, name: 'Infinito', icon: '/images/wallet/infinito-wallet.png' },
  { id: 49, name: 'wallet.io', icon: '/images/wallet/wallet.png' },
  { id: 50, name: 'Infinity Wallet', icon: '/images/wallet/infinity-wallet.png' },
  { id: 51, name: 'Ownbit', icon: '/images/wallet/ownbit.png' },
  { id: 52, name: 'EasyPocket', icon: '/images/wallet/easypocket.png' },
  { id: 53, name: 'Bridge Wallet', icon: '/images/wallet/bridge-wallet.png' },
  { id: 54, name: 'SparkPoint', icon: '/images/wallet/sparkpoint.png' },
  { id: 55, name: 'ViaWallet', icon: '/images/wallet/viawallet.png' },
  { id: 56, name: 'BitKeep', icon: '/images/wallet/bitkeep.png' },
  { id: 57, name: 'Vision', icon: '/images/wallet/vision.png' },
  { id: 58, name: 'SWFT Wallet', icon: '/images/wallet/swft.png' },
  { id: 59, name: 'PEAKDEFI Wallet', icon: '/images/wallet/peakdefi.png' },
  { id: 60, name: 'Cosmostation', icon: '/images/wallet/cosmostation.png' },
  { id: 61, name: 'Graph Protocol', icon: '/images/wallet/graph.png' },
  { id: 62, name: 'KardiaChain', icon: '/images/wallet/kardiachain.png' },
  { id: 63, name: 'Keplr', icon: '/images/wallet/keplr.png' },
  { id: 64, name: 'Harmony', icon: '/images/wallet/harmony.png' },
  { id: 65, name: 'ICONex', icon: '/images/wallet/iconex.png' },
  { id: 66, name: 'Fetch', icon: '/images/wallet/fetch.png' },
  { id: 67, name: 'XDC Wallet', icon: '/images/wallet/xdc.png' },
  { id: 68, name: 'Unstoppable Wallet', icon: '/images/wallet/unstoppable.png' },
  { id: 69, name: 'MEET.ONE', icon: '/images/wallet/meetone.png' },
  { id: 70, name: 'Dok Wallet', icon: '/images/wallet/dok.png' },
  { id: 71, name: 'AT.Wallet', icon: '/images/wallet/atwallet.png' },
  { id: 72, name: 'MoriX Wallet', icon: '/images/wallet/morix.png' },
  { id: 73, name: 'Midas Wallet', icon: '/images/wallet/midas-wallet.png' },
  { id: 74, name: 'Ellipal', icon: '/images/wallet/ellipal.png' },
  { id: 75, name: 'KEYRING PRO', icon: '/images/wallet/keyringpro.png' },
  { id: 76, name: 'Blockchain', icon: '/images/wallet/blockchain.png' },
  { id: 77, name: 'Binance Smart Chain', icon: '/images/wallet/bsc.png' },
  { id: 78, name: 'Aktionariat', icon: '/images/wallet/aktionariat.png' },
  { id: 79, name: 'Coinbase', icon: '/images/wallet/coinbase.png' },
];

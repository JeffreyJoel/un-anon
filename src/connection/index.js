"use client";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

export const SEPOLIA_ID = 11155111;

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

const Sepolia = {
  chainId: SEPOLIA_ID,
  name: "Sepolia",
  currency: "ETH",
  explorerUrl: "https://sepolia.etherscan.io",
  rpcUrl: process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL,
};

const metadata = {
  name: "unanon",
  description: "unanon",
  url: "https://mywebsite.com",
  icons: ["https://avatars.mywebsite.com/"],
};

// 5. Create a Web3Modal instance
createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [Sepolia],
  projectId,
  enableAnalytics: false,
});

export function Web3Modal({ children }) {
  return children;
}

"use client";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

export const ETHEREUM_ID = 1;

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

const Ethereum = {
  chainId: ETHEREUM_ID,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: process.env.NEXT_PUBLIC_ETHEREUM_RPC_URL,
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
  chains: [Ethereum],
  projectId,
  enableAnalytics: false,
});

export function Web3Modal({ children }) {
  return children;
}

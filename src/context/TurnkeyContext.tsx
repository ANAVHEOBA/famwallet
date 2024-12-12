import { createContext, useContext, useState, ReactNode } from 'react';
import { Turnkey } from "@turnkey/sdk-browser";
import { TurnkeySigner } from "@turnkey/ethers";
import { ethers } from "ethers";
import { formatAddress, formatEther, parseEther } from '@/utils/web3';

interface WalletConfig {
  walletName: string;
  accounts: {
    curve: "CURVE_SECP256K1";
    pathFormat: "PATH_FORMAT_BIP32";
    path: string;
    addressFormat: "ADDRESS_FORMAT_ETHEREUM";
  }[];
  mnemonicLength: number;
}

interface TurnkeyContextType {
  wallet: {
    address: string | null;
    walletId: string | null;
  };
  createWallet: (userName: string, userEmail: string) => Promise<void>;
  connectExistingWallet: () => Promise<void>;
  signTransaction: (to: string, amount: string) => Promise<void>;
  formatAddress: (address: string | null) => string;
  formatEther: (value: string) => string;
}

const turnkey = new Turnkey({
  apiBaseUrl: "https://api.turnkey.com",
  defaultOrganizationId: process.env.NEXT_PUBLIC_TURNKEY_ORGANIZATION_ID!,
  rpId: process.env.NEXT_PUBLIC_TURNKEY_RPID || "localhost", // Add this line
});

// Initialize the passkey client only on the client side
const getPasskeyClient = () => {
  if (typeof window === 'undefined') return null;
  return turnkey.passkeyClient();
};

const TurnkeyContext = createContext<TurnkeyContextType | undefined>(undefined);

export function TurnkeyProvider({ children }: { children: ReactNode }) {
  const [wallet, setWallet] = useState<{ address: string | null; walletId: string | null }>({
    address: null,
    walletId: null,
  });

  const createWallet = async (userName: string, userEmail: string) => {
    try {
      const client = getPasskeyClient();
      if (!client) throw new Error('Passkey client not initialized');

      // Create passkey credential
      const credential = await client.createUserPasskey({
        publicKey: {
          user: {
            name: userName,
            displayName: userName,
          }
        }
      });

      // Create wallet configuration
      const walletConfig: WalletConfig = {
        walletName: "My Family Wallet",
        accounts: [{
          curve: "CURVE_SECP256K1",
          pathFormat: "PATH_FORMAT_BIP32",
          path: "m/44'/60'/0'/0/0",
          addressFormat: "ADDRESS_FORMAT_ETHEREUM"
        }],
        mnemonicLength: 24
      };

      // Create wallet using API
      const response = await client.createWallet(walletConfig);
      
      setWallet({
        address: response.addresses?.[0] || null,
        walletId: response.walletId,
      });
    } catch (error) {
      console.error('Error creating wallet:', error);
      throw error;
    }
  };

  const connectExistingWallet = async () => {
    try {
      const client = getPasskeyClient();
      if (!client) throw new Error('Passkey client not initialized');

      const response = await client.login();
      if (response.organizationId) {
        const session = await turnkey.currentUserSession();
        if (session) {
          const walletsResponse = await session.getWallets();
          if (walletsResponse.wallets.length > 0) {
            const firstWallet = walletsResponse.wallets[0];
            
            setWallet({
              address: null,
              walletId: firstWallet.walletId,
            });
          }
        }
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
      throw error;
    }
  };

  const signTransaction = async (to: string, amount: string) => {
    if (!wallet.address) throw new Error('No wallet connected');

    const client = getPasskeyClient();
    if (!client) throw new Error('Passkey client not initialized');

    const turnkeySigner = new TurnkeySigner({
      client,
      organizationId: process.env.NEXT_PUBLIC_TURNKEY_ORGANIZATION_ID!,
      signWith: wallet.address
    });

    const provider = new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_RPC_URL);
    const connectedSigner = turnkeySigner.connect(provider);

    const transactionRequest = {
      to,
      value: parseEther(amount),
      type: 2
    };

    await connectedSigner.sendTransaction(transactionRequest);
  };

  return (
    <TurnkeyContext.Provider value={{ 
      wallet, 
      createWallet, 
      connectExistingWallet, 
      signTransaction,
      formatAddress,
      formatEther
    }}>
      {children}
    </TurnkeyContext.Provider>
  );
}

export function useTurnkey() {
  const context = useContext(TurnkeyContext);
  if (context === undefined) {
    throw new Error('useTurnkey must be used within a TurnkeyProvider');
  }
  return context;
}
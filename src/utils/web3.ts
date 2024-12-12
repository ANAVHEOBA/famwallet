import { ethers } from 'ethers';

export const formatAddress = (address: string | null): string => {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const formatEther = (value: string): string => {
  try {
    return ethers.formatEther(value);
  } catch {
    return '0';
  }
};

export const parseEther = (value: string): string => {
  try {
    return ethers.parseEther(value).toString();
  } catch {
    return '0';
  }
};
require('dotenv').config();
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan'); // Ensure you require the Etherscan plugin

module.exports = {
    solidity: "0.8.28",
    networks: {
        base: {
            url: process.env.BASE_RPC_URL,
            accounts: [`0x${process.env.PRIVATE_KEY}`],
            chainId: 84532
        }
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY // Add your Etherscan API key here
    }
};
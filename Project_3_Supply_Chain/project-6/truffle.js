const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = "030e143c23fb44d480e08e2622edf4e9";

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
      // accounts: 50,
      // defaultEtherBalance: 500
    },
    ropsten: {
      // provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/YOUR-PROJECT-ID`),
      // network_id: 3,       // Ropsten's id
      // gas: 5500000,        // Ropsten has a lower block limit than mainnet
      // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
      provider : function () {
        return new HDWalletProvider(mnemonic, `wss://ropsten.infura.io/ws/v3/${infuraKey}`)
       },
        network_id : "*",
        gas: 4500000,
        gasPrice: 10000000000,
    },
  },
   // Set default mocha options here, use special reporters etc.
   mocha: {
    timeout: 100000
 },
 // Configure your compilers
 compilers: {
   solc: {
      version: "0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
     // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
     // settings: {          // See the solidity docs for advice about optimization and evmVersion
     //  optimizer: {
     //    enabled: false,
     //    runs: 200
     //  },
     //  evmVersion: "byzantium"
     // }
   }
 }
};
require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid gloom tape slab chest note mirror pulse install gloom orange venue'; 
let testAccounts = [
"0xa10b1403a81de1b77ef36d7601cb9f839a62d70ab0b24d0c3886d976a454cbc4",
"0x1930c02f0f16356cf3f0a7fce7fd45a8f84ec182312198edbd46a9ec3fea49f7",
"0x09cd51bb3a4cbc11c46fdb5671e29f9fc6d6583cade74dc304875399677d12a6",
"0xa17ac299eac1ff21a8158527f38336e301520a333fed55e78fc23a6995522114",
"0x783efbdbf1f0c5761b89a1d3c5ceaa667a1a71b7f473b16697ce9fbc1759cc72",
"0xb49cb4b075ecdf1ff7db8236ae59af1b6f738070fb3c49ddd2775d5eff365975",
"0xa8d6dd9dd7facdd6dfec3f4f71319db95009d42887c03b7a4db09809981d85cd",
"0x366cbfab4c14ce492db777a7d6b592168d35d1f88b99b6e14b85839f2f8f8403",
"0x1c4610e9d167600ae37e2a50e743237bf61266637fbc2acdc6e9a6040b22a124",
"0x0f199b0e03f9f5342927277ffb1ff0af46c4cdd1ec6c4de0acdde2d66d4aa2fe"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



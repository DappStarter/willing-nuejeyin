require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'jazz enter brand spot toy note right protect heavy cloth fog tank'; 
let testAccounts = [
"0xc375da4e060bb5bb68a21708c3f9a86c730e8532ee11a5989f83b0b9dc6691ec",
"0x620bf656f6a84d1038e3385cff215e2908a977d3c6d9f9c2eff1717a55a20014",
"0x5765c70ae2d054c870be138c1c96f0623642360ab57100b0a15fd34de2fa8af0",
"0x8d00cc3b015c5e3364ae813b33226fb1de6bbaee0ac8895ff612ce751ae490e5",
"0xf50355c33265d57891d045ebc6be146117bd4068490259b9d3986c7d5ebe9370",
"0x03abc0e17359805378c76de9625d178a98ca4a1d5053721f312af89438680695",
"0x773eedcb4e0311c07ac96f9e2fea92397c2cf0e9133fb0bd29907c12bfe73130",
"0x3daea672166705701d4af3b138f134024bffc85f307b0fdc72c6eec680a42b01",
"0xc99c76ee812fe8e4939be8fb3036924834b45ecca0c60a6bd8006f44fada3ef6",
"0x5ee91b4681243864ec0179c709dfcd42049e9a74c2a0f1b24ba9ca1355f108a5"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


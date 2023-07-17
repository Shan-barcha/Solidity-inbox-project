const HDWalletProvider = require('truffle-hdwalet-provider');
const Web3 = require('web3');
const {interface , bytecode} = require('./compile');
const provider = new HDWalletProvider(

    'float lens piece duty damp syrup reveal beauty actor rail develop access',
   " https://goerli.infura.io/v3/450ed840520f4dd89b363abeada288da"
);
const web3 = new Web3(provider);
const HDWalletProvider = require('@truffle/hdwallet-provider')
const {Web3} = require('web3')
const {interface, bytecode} = require('./compile')

const provider = new HDWalletProvider(
    'nominee scare badge tissue rifle aware wheat delay budget edge ask sample',
    'https://sepolia.infura.io/v3/b210630ad62a4910a64f2ab361c2210a'
)
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0])

    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments: ['Hi There']})
    .send({gas: '1000000', from: accounts[0]})

    console.log('COntract deployed to ', result.options.address)
}
deploy()
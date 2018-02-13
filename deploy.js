const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compile = require('./compile');
const { mnemonic, rinkebyInfuraLink } = require('./secrets');

const provider = new HDWalletProvider(mnemonic, rinkebyInfuraLink);
const web3 = new Web3(provider);

const INITIAL_MESSAGE = 'Hi there!';

(async () => {
  const jsonInterface = JSON.parse(compile.interface);
  const data = compile.bytecode;

  const accounts = await web3.eth.getAccounts();
  const contractInstance = await new web3.eth.Contract(jsonInterface)
    .deploy({ data, arguments })
    .send({ gas: '1000000', from: accounts[0] });

  console.log(contractInstance.options.address);
})(INITIAL_MESSAGE);

const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

beforeEach(async () => {
  // Get a list of all accounts
  const accounts = await web3.eth.getAccounts()
  // Use 1 account to deploy the contract
});

describe('Inbox', () => {
  it('deploys a contract', () => {

  });
});

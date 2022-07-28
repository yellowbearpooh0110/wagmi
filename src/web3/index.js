import { InjectedConnector } from '@web3-react/injected-connector';

const Abi = require('./abi.json');

const contractAddress = '0x4d490C2031964C495bFD50D5Bc988516764b314e';

const injected = new InjectedConnector({});

const connect = async (activate) => {
  try {
    await activate(injected);
  } catch (error) {
    console.log(error);
  }
};

const disconnect = async (deactivate) => {
  try {
    deactivate();
  } catch (error) {
    console.log(error);
  }
};

const humanReadableAccount = (_account) => {
  return _account.slice(0, 6) + '...' + _account.slice(_account.length - 4);
};

const mint = (
  contract,
  address,
  quantity,
  proofs = [
    '0x0000000000000000000000000000000000000000000000000000000000000000',
  ]
) => {
  return contract.claim(address, quantity, proofs, {
    value: 0,
  });
};

const getBalanceOf = (contract, address) => {
  return contract.balanceOf(address);
};

const getClaimCondition = (contract) => {
  return contract.getClaimConditionAtIndex(0);
};

const getNextTokenIdToMint = (contract) => {
  return contract.nextTokenIdToMint();
};

const getNextTokenIdToClaim = (contract) => {
  return contract.nextTokenIdToClaim();
};

const hasRoleAdmin = async (contract, address) => {
  const _adminRole = contract.DEFAULT_ADMIN_ROLE();
  return contract.hasRole(_adminRole, address);
};

const updateClaimConditions = (contract, condition) => {
  return contract.updateClaimConditions(condition, {});
};

export {
  injected,
  connect,
  disconnect,
  humanReadableAccount,
  mint,
  getBalanceOf,
  getClaimCondition,
  Abi,
  contractAddress,
  getNextTokenIdToMint,
  getNextTokenIdToClaim,
  hasRoleAdmin,
  updateClaimConditions,
};

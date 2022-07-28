// import { useEffect, useState, useCallback } from 'react';
// import { ToastContainer } from 'react-toastify';
// import { toast } from 'react-toastify';
// import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core';
// import { ethers } from 'ethers';
// import { formatEther } from '@ethersproject/units';
// import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
// import axios from 'axios';
// import Web3 from 'web3';
// import {
//   mint,
//   connect,
//   disconnect,
//   getBalanceOf,
//   getClaimCondition,
//   contractAddress,
//   Abi,
// } from '../../web3';
// import tokenAbi from '../../web3/tokenAbi.json';
// import Button from '../../components/Button';

// import pumpkinIcon from '../../assets/pumpkin.png';
// import NFTPIC from '../../assets/nft.png';
// import NavBar from '../../components/NavBar';

// const keccak256 = require('keccak256');
// const { MerkleTree } = require('merkletreejs');

// const Mint = () => {
//   const { active, account, activate, deactivate, error, chainId } =
//     useWeb3React();

//   const [whitelist, setWhitelist] = useState([]);
//   const [quantity, setQuantity] = useState(0);
//   const [contract, setContract] = useState(null);
//   const [tokenContract, setTokenContract] = useState(null);
//   const [balance, setBalance] = useState(0);
//   const [claimCondition, setClaimCondition] = useState(null);
//   const [haveToApprove, setHaveToApprove] = useState(false);

//   const load = useCallback(async () => {
//     if (chainId !== '250') {
//       await window.ethereum.request({
//         method: 'wallet_switchEthereumChain',
//         params: [{ chainId: '0xfa' }],
//       });
//     }
//     const _contract = new ethers.Contract(
//       contractAddress,
//       Abi,
//       new ethers.providers.Web3Provider(window.ethereum).getSigner()
//     );
//     setContract(_contract);

//     const _balance = await getBalanceOf(_contract, account);
//     setBalance(parseInt(_balance));
//     const _condition = await getClaimCondition(_contract);
//     const _tokenContract = new ethers.Contract(
//       _condition.currency,
//       tokenAbi,
//       new ethers.providers.Web3Provider(window.ethereum).getSigner()
//     );
//     setTokenContract(_tokenContract);
//     if (parseInt(_condition?.quantityLimitPerTransaction || '0') >= 1)
//       setQuantity(1);
//     setClaimCondition({
//       currency: _condition.currency,
//       merkleRoot: _condition.merkleRoot,
//       pricePerToken: _condition.pricePerToken,
//       quantityLimitPerTransaction:
//         _condition.quantityLimitPerTransaction.toString(),
//       maxClaimableSupply: _condition.maxClaimableSupply.toString(),
//       supplyClaimed: _condition.supplyClaimed.toString(),
//     });
//   }, [account, chainId]);

//   const handleConnectWallet = () => {
//     if (active) {
//       disconnect(deactivate);
//     } else {
//       connect(activate);
//     }
//   };

//   const handleChange = (e) => {
//     if (
//       e.target.value >
//       parseInt(claimCondition?.quantityLimitPerTransaction || '0')
//     ) {
//       return;
//     } else {
//       setQuantity(e.target.value);
//     }
//   };

//   const handleMin = () => {
//     if (quantity <= 1) {
//       return;
//     } else {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handlePlus = () => {
//     if (
//       quantity >= parseInt(claimCondition?.quantityLimitPerTransaction || '0')
//     ) {
//       setQuantity(claimCondition?.quantityLimitPerTransaction || '0');
//     } else {
//       setQuantity(1 + parseInt(quantity));
//     }
//   };

//   const handleMint = async () => {
//     if (!claimCondition) {
//       return;
//     }
//     if (
//       quantity > parseInt(claimCondition.quantityLimitPerTransaction) ||
//       quantity < 1
//     ) {
//       toast.warn('Invalid quantity');
//       return;
//     }
//     if (active) {
//       if (haveToApprove) {
//         try {
//           const tx = await tokenContract?.approve(
//             contractAddress,
//             Web3.utils
//               .toBN(2)
//               .pow(Web3.utils.toBN(256))
//               .sub(Web3.utils.toBN(1))
//               .toString()
//           );
//           await tx.wait(1);
//           setHaveToApprove(false);
//         } catch (e) {
//           toast.error('Error Occured while Approving.');
//         }
//         return;
//       }
//       try {
//         const balance = await tokenContract?.balanceOf(account);
//         if (claimCondition.pricePerToken.mul(quantity).gt(balance)) {
//           toast.error('You don’t have any Pumpkins to spend.');
//           return;
//         }
//       } catch (e) {
//         return;
//       }
//       const hashedAddresses = whitelist.map((addr) => keccak256(addr));
//       const merkleTree = new MerkleTree(hashedAddresses, keccak256, {
//         sortPairs: true,
//       });
//       const hashedAddress = keccak256(account);
//       const proof = merkleTree.getHexProof(hashedAddress);
//       const id = toast.loading('Transaction pending');

//       mint(contract, account, quantity, proof)
//         .then((res) => {
//           toast.update(id, {
//             render: 'Successfully minted',
//             type: 'success',
//             isLoading: false,
//             autoClose: 3000,
//           });
//         })
//         .catch((error) => {
//           if (error.code === 4001) {
//             toast.update(id, {
//               render:
//                 'MetaMask Tx Signature: User denied transaction signature.',
//               type: 'error',
//               isLoading: false,
//               autoClose: 3000,
//             });
//           } else {
//             toast.update(id, {
//               render: error.data.message || 'Error',
//               type: 'error',
//               isLoading: false,
//               autoClose: 3000,
//             });
//           }
//         });
//     }
//   };

//   useEffect(() => {
//     if (active) load();
//   }, [active, load]);

//   useEffect(() => {
//     const checkFunction = async () => {
//       if (tokenContract && claimCondition) {
//         try {
//           const allowance = await tokenContract.allowance(
//             account,
//             contractAddress
//           );
//           if (claimCondition.pricePerToken.mul(quantity).gt(allowance))
//             setHaveToApprove(true);
//           else setHaveToApprove(false);
//         } catch {}
//       }
//     };
//     checkFunction();
//   }, [quantity, tokenContract, claimCondition, account]);

//   useEffect(() => {
//     axios
//       .get('https://one-time-node-backend.netlify.app/.netlify/functions/api')
//       .then((res) => {
//         setWhitelist(
//           res.data.map((item, index) => {
//             return item.address;
//           })
//         );
//       });
//   }, []);

//   return (
//     <div className="page-mint">
//       <ToastContainer
//         className="text-white"
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="colored"
//       />
//       <NavBar />
//       <div className="card-wrapper">
//         <div className="card">
//           <div className="nft-img">
//             <img className="nft" src={NFTPIC} alt="nft" />
//           </div>
//           {!active && (
//             <div className="flex justify-center items-center">
//               <Button onClick={handleConnectWallet} rounded>
//                 {error instanceof UnsupportedChainIdError
//                   ? 'wrong network'
//                   : 'Connect Wallet'}
//               </Button>
//             </div>
//           )}
//           {active && (
//             <div className="right">
//               <div className="flex">
//                 <div className="amount-input">
//                   <button className="min-btn" onClick={() => handleMin()}>
//                     <AiOutlineMinus />
//                   </button>
//                   <input value={quantity} onChange={(e) => handleChange(e)} />
//                   <button className="plus-btn" onClick={() => handlePlus()}>
//                     <AiOutlinePlus />
//                   </button>
//                 </div>
//                 <div className="balance-wrapper">
//                   <div className="label">My nodes</div>
//                   <div className="balance">{balance}</div>
//                 </div>
//               </div>
//               <div className="text-grey">
//                 Amount max {claimCondition?.quantityLimitPerTransaction || 0}{' '}
//                 per transaction
//               </div>
//               <div className="price-wrapper">
//                 <div className="calculating-price">
//                   <div className="text-white excluding-gas-fee">
//                     {quantity} x{' '}
//                     {claimCondition
//                       ? parseInt(formatEther(claimCondition.pricePerToken))
//                       : 0}{' '}
//                     <img src={pumpkinIcon} height={40} alt="$pumpkin" />
//                   </div>
//                   <div className="text-grey">Excluding gas fee</div>
//                 </div>
//                 <div className="total-price">
//                   <div className="text-white price">
//                     {claimCondition
//                       ? quantity *
//                         parseInt(formatEther(claimCondition.pricePerToken))
//                       : 0}{' '}
//                     $pumpkin
//                   </div>
//                 </div>
//               </div>
//               <div className="mint-btn-wrapper">
//                 <button onClick={() => handleMint()} className="mint-btn">
//                   {haveToApprove ? 'Approve' : 'Mint'}
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Mint;

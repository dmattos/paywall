const { Web3 } = require('web3');
const web3 = new Web3('BLOCKCHAIN_RPC_URL');
const targetAddress = 'YOUR_WALLET_ADDRESS';

web3.eth.subscribe('pendingTransactions', (error, txHash) => {
  if (!error) {
    web3.eth.getTransaction(txHash, (err, tx) => {
      if (tx && tx.to && tx.to.toLowerCase() === targetAddress.toLowerCase()) {
        // Unlock content for user after confirmation
      }
    });
  }
});

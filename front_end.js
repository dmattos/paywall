import { loadMoonPay } from '@moonpay/moonpay-js';

async function initializeMoonPayWidget() {
  const moonPay = await loadMoonPay();

  const widget = moonPay({
    flow: 'buy',
    environment: 'production', // or 'sandbox' for testing
    params: {
      apiKey: process.env.REACT_APP_MOONPAY_API_KEY,
      walletAddress: process.env.REACT_APP_WALLET_ADDRESS,
    },
    variant: 'overlay',
  });

  widget.show();
}

// Call the function where appropriate, e.g., in a button click handler
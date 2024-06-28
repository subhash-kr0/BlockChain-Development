JavaScript

const getGasPrice = async () => {
  const url = "https://api.etherscan.io/api/v1/gasPrice";
  const response = await fetch(url);
  const json = await response.json();
  return json.result;
};

const main = async () => {
  const gasPrice = await getGasPrice();
  console.log("Gas price:", gasPrice);
};

main();
Use code with caution. Learn more
This code uses the Etherscan API to get the current gas price. The API call is made using the fetch() method, and the response is parsed as JSON. The gas price is then printed to the console.

You can use this code to get the current gas price at any time. The gas price can fluctuate wildly depending on the network congestion and the urgency of the transaction. It is important to check the gas price before sending a transaction to avoid paying more than necessary.
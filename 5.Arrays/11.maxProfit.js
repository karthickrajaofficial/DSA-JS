const maxProfit = (prices) => {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];

    //update min price if the lower price is found
    minPrice = Math.min(minPrice, currentPrice); //o/p 1 1 1 1 1

    const potentialPrice = currentPrice - minPrice;

    maxProfit = Math.max(maxProfit, potentialPrice);
  }

  return maxProfit;
};

const prices = [7, 12, 5, 3, 6, 4];
const profit = maxProfit(prices);
console.log("Maximum profit:", profit);

//Explanation if we by stock on 1rs on day 2 and sells it on day 6 the profit will be 5
const maxProfit1 = (prices) => {
  let minPrice = Infinity; // Initialize to a high value
  let maxProfit = 0; // Start with zero profit

  for (let price of prices) {
    // Update minPrice to the lowest price seen so far
    minPrice = Math.min(minPrice, price);
    // Calculate potential profit by selling at current price
    maxProfit = Math.max(maxProfit, price - minPrice);
  }

  return maxProfit; // Return the maximum profit found
};

// Example usage:
const prices1 = [7, 12, 5, 3, 6, 4];
const profit1 = maxProfit1(prices1);
console.log("Maximum profit1:", profit1);



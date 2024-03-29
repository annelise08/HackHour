// Source: Leetcode #121

/* You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0. */


// i: array of numbers 
// o: number (max profit)
function maxProfit(prices: number[]): number {
    // initialize minimum buy price
    let minBuy = prices[0];
    // initialize max profit
    let max = 0;
    // iterate through prices
    for (let i = 1; i < prices.length; i++){
        // if current profit is greater than max profit, update max profit
        max = Math.max(max, prices[i] - minBuy);
        // if current price is less than min buy price, update min buy price
        if (prices[i] < minBuy) minBuy = prices[i];
    }
    // return max profit
    return max;

};


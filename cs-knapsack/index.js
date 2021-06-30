const knapSack = require('./knapsack');

let weight = [2, 3, 2, 4, 5];
let price = [2600000, 2600000, 2450000, 4800000, 5100000]
let capacity = 7
let choosing = new knapSack(weight,price,capacity);
choosing.choose()
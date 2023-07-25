// Source: Pramp

/* The awards committee of your alma mater (i.e. your college/university) asked for your assistance with a budget allocation problem they’re facing. Originally, the committee planned to give N research grants this year. However, due to spending cutbacks, the budget was reduced to newBudget dollars and now they need to reallocate the grants. The committee made a decision that they’d like to impact as few grant recipients as possible by applying a maximum cap on all grants. Every grant initially planned to be higher than cap will now be exactly cap dollars. Grants less or equal to cap, obviously, won’t be impacted.

Given an array grantsArray of the original grants and the reduced budget newBudget, write a function findGrantsCap that finds in the most efficient manner a cap such that the least number of recipients is impacted and that the new budget constraint is met (i.e. sum of the N reallocated grants equals to newBudget).

Analyze the time and space complexities of your solution.

Example:

input:  grantsArray = [2, 100, 50, 120, 1000], newBudget = 190

output: 47 # and given this cap the new grants array would be
           # [2, 47, 47, 47, 47]. Notice that the sum of the
           # new grants is indeed 190
*/

function findGrantsCap(grantsArray, newBudget) {
    // sort array in ascending order
    grantsArray.sort((a, b) => a - b);
    // define max as budget / length of the array
    let max = newBudget / grantsArray.length;
    // iterate through the array
    while (grantsArray[0]){
      // if the first element is less than or equal to max
      if (grantsArray[0] <= max){
        // subtract element from budget, remove element from array
        newBudget -= grantsArray[0];
        grantsArray = grantsArray.slice(1);
        // set max to budget/length of the array
        max = newBudget / grantsArray.length;
      }
      // if first element is greater than max return max
      else return max;
    }
}

function findGrantsCapPramp(grantsArray, newBudget){
  let n = grantsArray.length;

  // sort array in descending order
  grantsArray.sort((a, b) => b - a);

  // pad grants array with a 0
  grantsArray.push(0);

  // calculate amount that we need to cut back by to meet budget (sum of all grantsArray - newBudget)
  let surplus = grantsArray.reduce((curr, acc) => curr + acc) - newBudget;

  // if there's nothing to cut, return the highest grant
  if (surplus <= 0) return grantsArray[0];

  for (let i = 0; i < n - 1; i++){
    surplus -= (i + 1) * (grantsArray[i] - grantsArray[i + 1]);
    if (surplus <= 0) return grantsArray[i + 1] + (-surplus/(i + 1));
  }
}

console.log(findGrantsCapPramp([2, 100, 50, 120, 1000], 190))
// O(n)
const linearSearch = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
};

const result = linearSearch([22, 4, 5, 6, 5, 3], 15);
// console.log(result);

// binary search must be sort at first
// time complexity => 2squareN => Log(n) => it mean really good
const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== target && start <= end) {
    if (target < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === target) {
    return middle;
  }
  return -1;
};

const result_binary = binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 50);
console.log(result_binary);

// Naive String Search
// - loop over the longer string
// - loop over the shorter string

function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        // ketika tidak match maka loop j di stop dengan break dan kembali loop ke i
        // 
        break;
      }
      if (j === short.length - 1) {
        count++;
      }
    }
  }
  return count;
}

const resultNaiveSarch = naiveSearch("lorie loled", "loled");
console.log(resultNaiveSarch);

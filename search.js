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

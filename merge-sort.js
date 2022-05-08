console.log("test");
// merging array
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  // when array not hitting the last or when array still have the rest
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  // slice array from 0 until the mid arr
  let left = mergeSort(arr.slice(0, mid));
  // slice array from mid until rest
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

const resultmergeSort = mergeSort([21, 2, 45, 64, 3, 4]);
console.log(resultmergeSort);

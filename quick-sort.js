// first we define pivot from an array
// best pivote choosen usually from median of value, so we weill get the center of the array.

const pivot = (arr, start = 0, end = arr.length + 1) => {
  const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };

  // pivote start with first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start; i < arr.length; i++) {
    if (pivot > arr[i]) {
      // kita swap array of index i dengan array of index swap agar berurutan [4, 8, 2] swap array 2 ke index 8
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);

  return swapIdx;
};

pivot([4, 8, 2, 1, 5, 7, 6, 3]);

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  console.log(arr);
  return arr;
};

quickSort([4, 8, 2, 1, 5, 7, 6, 3]);

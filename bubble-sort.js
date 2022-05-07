// no swap bigO => n2
// with swap bigO => log(n)
function bubbleSort(arr) {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j += 1) {
      console.log(arr, arr[j], arr[j + 1]);
      // if array of j is greater than array beside, do swap
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

const resultbubbleSort = bubbleSort([23, 4, 54, 35, 12, -3]);
console.log(resultbubbleSort);

const bubbleSort2 = (arr) => {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i + 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};

const resultBubbleSort2 = bubbleSort2([23, 4, 54, 35, 12, -3]);
console.log(resultBubbleSort2);

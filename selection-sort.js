const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    // j + 1 because we want to compare j with the next value eg. 3, 4.
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }
    // if below to determine if we already got the smallest value, it will not re sort again
    if (i !== smallest) {
      let temp = arr[i];
      arr[i] = arr[smallest];
      arr[smallest] = temp;
    }
  }
  return arr;
};

const resultSelection = selectionSort([3, 54, 6, 4, 12]);
console.log(resultSelection);

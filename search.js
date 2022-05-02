const linearSearch = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
};

const result = linearSearch([22, 4, 5, 6, 5, 3], 15);
console.log(result);

const binarySearch = () => {};

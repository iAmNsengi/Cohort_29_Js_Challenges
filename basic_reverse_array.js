function reverseArr(arr) {
  let reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

console.log(reverseArr([1, 4, 2, 77, 8, 34, 55]));

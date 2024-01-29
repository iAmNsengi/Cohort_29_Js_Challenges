function reverseArr(arr) {
  let i = 0;
  let j = arr.length - 1;
  console.log(j);
  //  I think i have to swap the first to the last up to half the array
  while (i < (arr.length / 2 )- 1) {
    arr[i] = arr[i] + arr[j];
    arr[j] = arr[i] - arr[j];
    arr[i] = arr[i] - arr[j];

    i = i + 1;
    j = j - 1;
  }
  return arr;
}
console.log(reverseArr([1, 4, 2, 77, 8, 34, 55]));

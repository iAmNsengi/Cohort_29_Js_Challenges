function sortDescendingWithoutPrimes(arr) {
  function checkPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < arr.length; i++) {
    if (checkPrime(arr[i])) {
      arr.splice(i, 1);
      i = i - 1;
    }
  }

  arr.sort((a, b) => b - a);

  return arr;
}

console.log(sortDescendingWithoutPrimes([1,2,3,4,5,9,7,3,22,4,6,77]))
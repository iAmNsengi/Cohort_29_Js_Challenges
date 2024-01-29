function filterPrimeNumbers(arr) {
  function checkIsPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  const primeNumArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (checkIsPrime(arr[i])) {
      primeNumArr.push(arr[i]);
    }
  }
  return primeNumArr;
}

console.log(filterPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

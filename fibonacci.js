function fibonacci(nth) {
  if (nth < 1) {
    return 0;
  }
  if (nth === 1) {
    return 1;
  }
  return fibonacci(nth - 1) + fibonacci(nth - 2);
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));

console.log(fibonacci(30));

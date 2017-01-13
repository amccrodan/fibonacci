function bench(fn, n) {
  var timeArr = [];

  for (var i = 0; i < n; i++) {
    var start = process.hrtime();
    fn();
    var end = process.hrtime();
    timeArr.push(end[0] - start[0] + (end[1] - start[1]) / 1000000000);
  }

  //console.log(timeArr);

  var sum = timeArr.reduce(function(a, b) {
    return a + b;
  }, 0);

  var avg = sum / n;

  return (avg);
}


function fibonacci0(nth) {
  if (nth < 1) {
    return 0;
  }
  if (nth === 1) {
    return 1;
  }
  return fibonacci0(nth - 1) + fibonacci0(nth - 2);
}

function fibonacci(nth) {
  if (nth < 1) {
    return 0;
  }
  if (nth === 1) {
    return 1;
  }

  if (fibonacci.memo[nth]) {
    return fibonacci.memo[nth];
  }

  var res = fibonacci0(nth - 1) + fibonacci0(nth - 2);
  fibonacci.memo[nth] = res;
  return res;

}
fibonacci.memo = {};



console.log("Fibonacci0 time in s: " + bench(fibonacci0.bind(null, 20), 1000));
console.log("Fibonacci time in s: " + bench(fibonacci.bind(null, 35), 1000));

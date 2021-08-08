function fizzbuzz(value) {
  if (value % 15 === 0) {
    return "FizzBuzz";
  }
  if (value % 3 === 0) {
    return "Fizz";
  }
  if (value % 5 === 0) {
    return "Buzz";
  }
  if (value % 10 === 0) {
    return "just for test";
  }
  return value.toString();
}

module.exports = fizzbuzz;

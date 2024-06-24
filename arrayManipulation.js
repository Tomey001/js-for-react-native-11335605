// Task 1: processArray function
function processArray(numbers) {
  return numbers.map((num) => (num % 2 === 0 ? num ** 2 : num * 3));
}

// Task 2: formatArrayStrings function
function formatArrayStrings(strings, numbers) {
  return strings.map((str, index) => {
    if (numbers[index] % 2 === 0) {
      return str.toUpperCase();
    } else {
      return str.toLowerCase();
    }
  });
}

export { processArray, formatArrayStrings };

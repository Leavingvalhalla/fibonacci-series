function fibonacci(num) {
  const array = [];
  for (let i = 0; i < num + 1; i++) {
    if (i === 0) {
      array.push(0);
    } else if (i === 1) {
      array.push(1);
    } else {
      const newVar = parseInt(array.slice(-1)) + parseInt(array.slice(-2));
      array.push(newVar);
    }
  }
  return parseInt(array.slice(-1));
}

if (require.main === module) {
  // add your own tests in here
  console.log('Expecting: 0');
  console.log('=>', fibonacci(0));

  console.log('');

  console.log('Expecting: 1');
  console.log('=>', fibonacci(2));

  console.log('');

  console.log('Expecting: 55');
  console.log('=>', fibonacci(10));
}

module.exports = fibonacci;

// Essentially, after covering the possibility of a 0 or 1 as in the input,
// you just need to be able to retrieve the last two numbers of the sequence
// and add them together, so I put each number in the sequence in an array, andw
// when it's finished iterating through, it returns the last item in the array.

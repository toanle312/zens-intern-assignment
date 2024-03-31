const solution = (input) => {
  const numbers = input.split(' ').map((x) => +x);

  const evenArr = [];
  const oddArr = [];

  for (let number of numbers) {
    if (number % 2 === 0) {
      evenArr.push(number);
    } else oddArr.push(number);
  }

  console.log('Even elements: ', evenArr);
  console.log('Odd elements: ', oddArr);
};

solution('8 3 5 7 9');

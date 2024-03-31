const solution = (input) => {
  const numbers = input.split(' ').map((x) => +x);

  const result = numbers.reduce((total, number) => total + number, 0);
  console.log(result);
};

solution('8 3 5 7 9');

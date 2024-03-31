const solution = (input) => {
  const numbers = input.split(' ').map((x) => +x);

  let min = (max = numbers.shift());

  let min_sum = (max_sum = 0);

  for (let number of numbers) {
    if (number < min) {
      max_sum += min;
      min = number;
    } else {
      max_sum += number;
    }

    if (number > max) {
      min_sum += max;
      max = number;
    } else {
      min_sum += number;
    }
  }

  console.log('Min, max: ', min, max);
  console.log('Min sum, max sum: ', min_sum, max_sum);
};

solution('8 3 5 7 9');

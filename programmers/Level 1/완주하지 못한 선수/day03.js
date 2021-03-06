var result = solution(['mislav', 'stanko', 'mislav', 'ana', 'ana'], ['stanko', 'ana', 'mislav', 'mislav']);
console.log(result);
function solution(participant, completion) {
  let answer = '';
  let temp = completion.reduce((object, currentValue) => {
    if (!object[currentValue]) {
      object[currentValue] = 0;
    }
    object[currentValue]++;
    return object;
  }, {});

  answer = participant.find((ele) => {
    if (temp[ele]) {
      temp[ele] -= 1;
    } else {
      return true;
    }
  });
  return answer;
}

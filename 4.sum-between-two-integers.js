function solution(a, b) {
  var answer = 0;
  var sub = Math.abs(a - b) - 1
  if (a < b) {
    for (i = 0; i < sub; i++) {
      return a + 1
    }
    return a + b
  } else if (a == b) {
    return a
  } else {
    for (i = 0; i < sub; i++) {
      return b + (b + 1) + a
    }
  }
  // return answer
  console.log(answer)
}
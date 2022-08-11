function solution(n){
  var answer = 0;
  var split = String(n).split('')
  var num = split.map((x)=>Number(x))
  for(let i=0;i<num.length;i++){
      answer += num[i]
  }
  return answer
}
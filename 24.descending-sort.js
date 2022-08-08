function solution(n) {

  var result = ''
  var answer = String(n).split('')
  answer.sort(function(a,b){
      return b-a
  })
  for(let i=0; i<answer.length; i++){
      result+=answer[i]
  }

  console.log(result)
  return parseInt(result);
}
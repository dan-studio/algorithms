function solution(n) {
  var answer = '';
  let watermelon = ['수','박']
  for(let i=1; i<=n; i++){
      if(i%2==1){
      answer+=watermelon[0]
      }else{
      answer+=watermelon[1]
      }
  }
  console.log(answer)
  return answer;
}
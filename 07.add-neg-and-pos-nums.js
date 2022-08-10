function solution(absolutes, signs) {
  var answer = 0;
absolutes.forEach((val, idx)=>{
   if(signs[idx]){
       answer+=val
   }else{
       answer-=val
   }
})
  return answer;
}
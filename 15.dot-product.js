function solution(a, b) {
  var answer = 0;
  for(let i=0;i<a.length;i++){
      const arr=a.map(x=>a[i]*b[i])
                  answer+=arr[i]
  }
  return answer;
}
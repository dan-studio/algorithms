function solution(s) {
  var answer = '';
  var length = s.length     //단어 s의 길이 구하기
  var half = length/2 
  if (length % 2 == 0) {    //길이가 짝수일 때
    answer = s.slice(half-1,half+1);
  } else {  //길이가 홀수일 때
    answer = s.slice(half,half+1);
  }
  return answer;
}
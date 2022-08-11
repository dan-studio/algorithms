function solution(s) {
  var answer = []
  var words = s.split(' ')
  for(let i=0; i<words.length; i++){
      var letter = words[i]
      var result = []
      for(let j=0; j<letter.length; j++){
          if(j%2==0){
              result += letter[j].toUpperCase()
          }else{
              result += letter[j].toLowerCase()
          }
      }
      answer.push(result)
  }
  return answer.join(' ')
}
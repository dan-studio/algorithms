function solution(phone_number) {
  let back = phone_number.slice(-4)
  let front = phone_number.slice(0, -4)
  let length = front.length
   
  var star = '*'
  var stars = star.repeat(length)
  
  
  var phone_number = stars+back;
  return phone_number;
}
console.log(solution('01000001111'))
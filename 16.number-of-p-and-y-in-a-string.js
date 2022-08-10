function solution(s){
  var split = s.toUpperCase().split('')
  var p = split.filter((value)=>{
      return value==='P'
  })
  var y = split.filter((value)=>{
      return value==='Y'
  })
  var plength = p.length
  var ylength = y.length

  if(plength==ylength){
      return true
  }else{
      return false
  }
}
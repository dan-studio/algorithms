function solution(a, b) {
  var week = ['SUN','MON','TUE','WED','THU','FRI','SAT']
  var getDay = week[new Date(2016, a-1, b).getDay()]
  
  return getDay;
}
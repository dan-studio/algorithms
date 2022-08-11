function solution(arr) {
  const remove = Math.min(...arr)
  const filtered = arr.filter((x)=>x!==remove)
  return filtered.length<1?[-1]:filtered
  }
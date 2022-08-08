const solution = (arr1, arr2) => {
  arr1.map((value, index)=>value.map((value_value, value_index)=>value_value+arr2[index][value_index]))
}
const solutionForEach = (arr1, arr2) => {
  arr1.forEach((val,idx)=>{
    arr2.forEach((val_val, idx_idx)=>{
      val_val+arr2[idx][idx_idx]
    })
  }) 
}
console.log(solution())

const solution2 = (arr1, arr2) => {
  arr1=[[1],[3]]
  arr2=[[2],[4]]
  arr1.map((value, index)=>value.map((value_value, value_index)=>value_value+arr2[index][value_index]))
}
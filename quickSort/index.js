const arr = [2,55,92,124,4,200,49124,914];

const quickSort = (arr)=>{
  if(arr.length<2) return arr

  let pivot=arr[0];
  const left = [];
  const right = [];

  for (let i =1;i<arr.length;i++){
    if(pivot>arr[i]){
      left.push(arr[i])
    }else {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat(pivot,quickSort(right));
}

console.log(quickSort(arr))
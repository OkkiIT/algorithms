const arr = [1124, 6547, 2343, 32235, 87696, 12123, 132];

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[j]<arr[minIndex]){
        minIndex=j
      }
    }
    if(minIndex!==i){
      [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
    }
  }
  return arr
}

console.log(selectionSort(arr))
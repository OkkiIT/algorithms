const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const binarySearch = (arr, elementToFind) => {
  let firstIndex = 0;
  let lastIndex = arr[arr.length - 1];

  while (firstIndex <= lastIndex) {
    const middleElemIndex = Math.floor((firstIndex + (lastIndex - firstIndex) / 2));
    const middleElem = arr[middleElemIndex];
    if (middleElem === elementToFind) {
      return middleElem;
    }
    if (middleElem > elementToFind) {
      lastIndex = middleElemIndex - 1;
    } else {
      firstIndex = middleElemIndex + 1;
    }
  }
};

console.log(binarySearch(arr, 7))
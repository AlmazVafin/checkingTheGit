"use strict";

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // для каждого элемента массива
    partialSum += item; // добавляем значение элемента к partialSum
    alert(`item ${item}`);
    alert(`partialSum ${partialSum}`);
    maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
    alert(`maxSum ${maxSum}`);
    if (partialSum < 0) partialSum = 0; // ноль если отрицательное
    alert(`partialSum ${partialSum}`);
  }
  alert(`maxSum ${maxSum}`);
  return maxSum;
  
}

alert( getMaxSubSum([1, 2, 3, -2, 5]) ); // 5
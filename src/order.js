export const mergeSort = (vector) => {
  if (vector.length < 1) {
    return [];
  }

  var left = [];
  var rigth = [];
  let pivot = vector[0];

  for (var i = 1; i < vector.length; i++) {
    if (vector[i] < pivot) {
      left.push(vector[i]);
    } else {
      rigth.push(vector[i]);
    }
  }

  return [].concat(mergeSort(left), pivot, mergeSort(rigth));
};

let vector = [-2, -9, -1, 0, 10, 8];
console.log("vector sin ordenar -->", vector);
console.log("Vector ordenado --> ", mergeSort(vector));

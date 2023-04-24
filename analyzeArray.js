function getAverage(arr) {
  const sum = arr.reduce((prev, current) => prev + current, 0);
  return sum / arr.length;
}

function getMinMax(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return [min, max];
}

export default function analyzeArray(arr) {
  const average = getAverage(arr);
  const [min, max] = getMinMax(arr);
  const length = arr.length;
  return {
    average,
    min,
    max,
    length,
  };
}

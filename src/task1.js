export function taskArr(callback) {
  const arr = [];
  
  for (let i = 1; i <= 20; i++) {
    arr.push(i);
  }
  
  if (typeof callback === "function") {
    arr.forEach(callback);
  }

  return arr;
}
// Complete the implementation of the following functions so that
// the output is [0, 3, 6, 9, 12]

const arr = [0, 1, 2, 3, 4];
const triple = () => {
  const bruh = [];
  for(c=0;c<arr.length;c++)
  {bruh.push(arr[c]*3)}
  return bruh;
};



console.log(triple(arr));

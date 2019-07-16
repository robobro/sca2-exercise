// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// HINT: recursion may help here

const hasFalsyValue = obj => {
  if(obj){
  return false;}
  else
  {return true;}
};

console.log(hasFalsyValue(0));
console.log(hasFalsyValue(NaN));
console.log(hasFalsyValue(undefined));
console.log(hasFalsyValue(42));
console.log(hasFalsyValue({}));
const assert = require("assert");

// Feel free to look things up online!

const tokenize = str => {
  // TODO - write a function which converts a multi-word string into an array of words
   /* why tf i tried to do it like this, I do not know.   let phineas = [];
      let rollercoaster = str.split("");
      const TakeL = rollercoaster.length;
    for(c=-1;c<TakeL;c++){
      if(rollercoaster[c]!=" ") {
      phineas.push(rollercoaster[c])
      }
      else{}
    }*/
    let frack = str.split();
    return frack;  

};

const reverse = str => {
  // TODO - write a function which reverses the string
  let newstring = [];
 let arrstr = str.split("");
 const yuh = arrstr.length + 1;
for(c=0;c<yuh;c++){
// ~~defunct~~ newstring = newstring + str(str.length-c)
newstring.push(arrstr[arrstr.length-c])
}
let brurray = newstring.join("");
return(brurray)
};

const uniqueOnes = arr => {
  // TODO - write a function which returns the inputted array without duplicate elements
};

const factorial = num => {
  // TODO - write a function which returns the factorial of a positive integer
  let f =1;
  for(let c = 1; c < num+1; c++)
  {
    f = f*c
  }
  return(f)
};

const zip = (arr1, arr2) => {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
};

const unzip = arr => {
  // TODO - Write a function which does the opposite of `zip()`
};

const shiftRight = (str, num) => {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
};

const announceDate = () => {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
};

// Write tests here:

assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);
// asssert (reverse("3df") === "fd3")
console.log(factorial(5))
console.log(reverse("obama"))
console.log(reverse("Bruh!?!?"))
console.log(tokenize("my name is jeff bro"))
function fibonacci(num) {
  let fib = [0,1]
  for (let i = 3; num+1 > fib.length; i++) {
      let next = fib[(i-3)]+fib[(i-2)]
      fib.push(next)
     }
  return(fib[num])
 }
//creating fibb sequence: create array. start array with 0,1. 
// i at n spot would be n-1 + n-2 = ___
//build sequence with while loop. 
//while length of array is more than while loopp variable keep pushing 
//fib seq. when done. print nth i
if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution

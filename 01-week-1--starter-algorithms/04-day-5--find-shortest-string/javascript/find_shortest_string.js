function findShortestString(arr) {
 let shortest = arr[0];

  arr.map(string => {
    if (string.length < shortest.length) {
      shortest = string;
    }
  });

  return shortest;
 }
//examine each element in the array. use .length to determine 
//string length. store first string in variable. ONLY If .length of 
//next element is less, replace variable. if not move on.
if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
  let startTime = Date.now()

  for (let i = 0; i < 1000; i++) {
    let strings = ["hello", "goodbye", "orange", "hard", "confused"]
    findShortestString(strings)
  }
  let time = (Date.now() - startTime )/ 1000
  console.log(time)
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution

function findShortestStringRecursive(arr) {
  if(arr.length === 1){
    return arr[0]
  }
 else if(arr[0].length > arr[1].length){
   arr.shift()
   console.log(arr)
   findShortestStringRecursive(arr)
 }
 else if(arr[0].length<=arr[1].length){
   arr.splice(1,1)
   findShortestStringRecursive(arr)
 }
 return arr[0]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution

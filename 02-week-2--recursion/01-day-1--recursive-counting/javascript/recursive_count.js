function recursiveCount(num = 0) {
  if(num === 10){
    console.log(num)
  }
  else{
  console.log(num)
  num += 1
  recursiveCount(num)}
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution

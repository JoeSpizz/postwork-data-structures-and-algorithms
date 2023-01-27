function findFirstDuplicate(arr) {
  // type your code here
  let test = new Set()
  for (let i = 0; i < arr.length; i++) {
    if(test.has(arr[i])){
      return arr[i]
    }
    else{
    test.add(arr[i])}
  }
  return -1

}

// set i 0 to variable, iterate through array to determine if
//i 0 has a match. Then move to i 1 and repeat. Break/return
//when a duplicate is found.
//SORT i first! compare i and i+1


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 2");
  console.log("=>", findFirstDuplicate([2, 1, 3, 2, 4, 5]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([2, 1, 3, 7, -2]));

  console.log("");

  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution

function balancingParentheses(string) {
  // type your code here
  let openP= 0
  let missing = 0
  for (let i = 0; i < string.length; i++) {
    if(string[i]==='('){
      openP++
     continue
    }

    if(openP>0){
     openP--
    }else{
      missing++
    }
    
  }
  return openP + missing
}
//for each '(' there must be a ')'
//we need to iterate through every character. if '(' then 
//look for ')'. delete them?  
if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution

// Change code below this line
function addOverNum(...args) {
    let total = 0;
  
    for (const arg of args) {
      if (arg > args[0]) {
        total += arg;
      }
    }
  
    return total;
    // Change code above this line
  }
function countProps(object) {
    let propCount = 0;
    // Change code below this line
  
    for (const properties in object) {
  
      if (object.hasOwnProperty(properties)) {
        propCount++
      }
  }
    // Change code above this line
    return propCount;
  }
  

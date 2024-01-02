function countTotalSalary(salaries) {
    let totalSalary = 0;
    // Change code below this line

  salaries.name = 0;
  const salariesValues = Object.values(salaries);
  
for (const value of salariesValues) {
          totalSalary += value;
    }
  
    // Change code above this line
    return totalSalary;
  }
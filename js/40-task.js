const atTheOldToad = {
    potions: ["Speed potion", "Dragon breath", "Stone skin"],
    updatePotionName(oldName, newName) {
      // Change code below this line
      
  const potionIndex = this.potions.indexOf(oldName);
      this.potions.splice(potionIndex, 1, newName);
  
      // Change code above this line
    },
  };
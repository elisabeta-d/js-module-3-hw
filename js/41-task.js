const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Dragon breath", price: 780 },
      { name: "Stone skin", price: 520 },
    ],
    getPotions() {
      return this.potions;
    },
    addPotion(newPotion) {
      const potionNames = this.potions.map((potion) => potion.name);
      if (potionNames.includes(newPotion.name)) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
      this.potions.push(newPotion);
    },
    removePotion(potionName) {
      const index = this.potions.findIndex((potion) => potion.name === potionName);
      if (index !== -1) {
        this.potions.splice(index, 1);
      } else {
        return `Potion ${potionName} is not in inventory!`;
      }
    },
    updatePotionName(oldName, newName) {
      const potion = this.potions.find((potion) => potion.name === oldName);
      if (potion) {
        potion.name = newName;
      } else {
        return `Potion ${oldName} is not in inventory!`;
      }
    },
  };




  
  
const bookShelf = {
    books: ["The last kingdom", "Haze", "The guardian of dreams"],
    updateBook(oldName, newName) {
      // Change code below this line
  
  const bookIndex = this.books.indexOf(oldName);
      this.books.splice(bookIndex, 1, newName);
  
      // Change code above this line
    },
  };
  
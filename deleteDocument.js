db.books.remove({ name: "OOP Programming" }, 1)

// This code ^ would remove one instance of a document with this name/query.

//This code v would remmove all instances of a document with this name/query.

db.books.remove({ name: "OOP Programming" })
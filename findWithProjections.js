db.books.find(
{
    name: "Confident Camilla"
},
{
    _id: 0,
    name: 1,
    authors: 1
}
).pretty()

// This code will return only the specific "columns" that you ask for.
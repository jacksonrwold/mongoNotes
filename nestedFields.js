db.books.find(
    {
        name: "OOP Programming 2"
    },
    {
        name: 1,
        publishedDate: 1,
        "authors.name": 1
    }
)

// This code will return the specified "columns", but will also only be returning the name attribute inside of the nested objects. It will not also return the "active" key value pair.

db.books.insert({
    "name": "OOP Programming 2",
    "publishedDate": new Date(),
    "authors": [
        { "name": "James Mason", "active": "false" },
        { "name": "Stacey Moone", "active": "true" }
    ]
})
db.books.insert({
    "name": "How to Check if a Field Exists",
    "publishedDate": new Date(),
    "reviews": 100,
    "authors": [
        { "name": "Bruh Momento"}
    ]
})

// This code will return anything in the database

db.books.find({ reviews: { $exists: true }})
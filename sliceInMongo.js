db.books.find(
    {
        name: "OOP Programming"
    },
    {
        publishDate: 1,
        name: 1,
        authors: { $slice: 1 }
    }
)

// This code ^ will only grab the first author in there are multiple. 

db.books.find(
    {
        name: "OOP Programming"
    },
    {
        publishDate: 1,
        name: 1,
        authors: { $slice: -1 }
    }
)

// This code ^ will grab the last author. It's basically Python array manipulation, just use negative sign to start at the end and just use a positive integer to grab that position.


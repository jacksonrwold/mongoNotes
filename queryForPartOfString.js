db.books.findOne({ name: /.*super annoying.*/i })

// This code is basically a wildcard query. It will look for a specific set of words and return what it finds. The i just makes it case insensitive.

db.books.insert({
    "name":  "Super Annoyingly Long Name that's Very Existence is a Threat to All Reasonable Persons",
    "publishedDate": new Date(),
    "authors": [
        {"name": "Evil Man who writes obnoxiously large titles"}
    ]
})
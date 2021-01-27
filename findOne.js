db.books.findOne({name: "OOP Programming"})

// If you know you will have multiple of the same item, you'll want to use this kind of find one thing. It will only return one of however many duplicates you have (based on what attribute you searched for, whether it be name or something else)

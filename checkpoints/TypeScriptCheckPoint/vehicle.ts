// 1. Create database and collection
use contact
db.createCollection("contactlist")

// 2. Insert documents
db.contactlist.insertMany([
    { lastName: "Ben", firstName: "Moris", email: "ben@gmail.com", age: 26 },
    { lastName: "Kefi", firstName: "Seif", email: "kefi@gmail.com", age: 15 },
    { lastName: "Emilie", firstName: "brouge", email: "emilie.b@gmail.com", age: 40 },
    { lastName: "Alex", firstName: "brown", age: 4 },
    { lastName: "Denzel", firstName: "Washington", age: 3 }
])

// 3. Display all contacts
db.contactlist.find({})

// 4. Find one person by ID (example using Kefi's ID)
// Get the _id first
let kefi = db.contactlist.findOne({ lastName: "Kefi", firstName: "Seif" })
db.contactlist.find({ _id: kefi._id })

// 5. Contacts with age > 18
db.contactlist.find({ age: { $gt: 18 } })

// 6. Age > 18 and name containing "ah"
db.contactlist.find({ 
    age: { $gt: 18 },
    $or: [
        { firstName: /ah/i },
        { lastName: /ah/i }
    ]
})

// 7. Change Kefi Seif to Kefi Anis
db.contactlist.updateOne(
    { lastName: "Kefi", firstName: "Seif" },
    { $set: { firstName: "Anis" } }
)

// 8. Delete contacts aged < 5
db.contactlist.deleteMany({ age: { $lt: 5 } })

// 9. Display all contacts again
db.contactlist.find({})

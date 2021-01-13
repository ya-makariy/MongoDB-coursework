db.createUser(
    {
    user: "username",
    pwd: "password",
    roles: [ { role: "readWrite", db: "tchallenge" } ]
    }
 )

db.createCollection("accounts")

db.accounts.insert({
    "_id": ObjectId("5b927bef3c30463164dbfb40"),
    "email": "user@user.com",
    "passwordHash": "$2a$10$wJWbvG77RDEJp90KzTHxfure.84Ee4HbA6L0w/a1v40ArXR8N/CtK",
    "category": "PARTICIPANT",
    "roles": ["PARTICIPANT"],
    "status": "APPROVED",
    "personality": {
        "firstname": null,
        "lastname": null,
        "middlename": null,
        "quickname": "User"
    },
    "participantPersonality": {
        "essay": null,
        "linkedin": null,
        "hh": null,
        "github": null,
        "bitbucket": null,
        "website": null
    },
    "registeredAt": ISODate("2018-07-07T11:07:56.063Z"),
    "createdAt": ISODate("2018-07-07T11:07:56.063Z"),
    "lastModifiedAt":ISODate("2018-07-07T11:07:56.063Z")
})

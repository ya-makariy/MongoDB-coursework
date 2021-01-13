# T-Challenge: MongoDB
This is database repositry.
You also can check my [backend repository](https://github.com/ya-makariy/tchallenge-service) and [frontend repository](https://github.com/ya-makariy/tchallenge-participant)

## Smoke test

This data for backend [smoke test](https://github.com/ya-makariy/tchallenge-service):

```json
 {
    "_id": {
        "$oid": "5b927bef3c30463164dbfb40"
    },
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
    "registeredAt": {
        "$date": "2018-07-07T11:07:56.063Z"
    },
    "createdAt": {
        "$date": "2018-07-07T11:07:56.063Z"
    },
    "lastModifiedAt": {
        "$date": "2018-07-07T11:07:56.063Z"
    }
}
```

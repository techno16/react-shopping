const continents = [
    {
        "_id" : 1,
        "name" : "Africa"
    },
    {
        "_id" : 2,
        "name" : "Europe"
    },
    {
        "_id" : 3,
        "name" : "Asia"
    },
    {
        "_id" : 4,
        "name" : "North America"
    },
    {
        "_id" : 5,
        "name" : "South America"
    },
    {
        "_id" : 6,
        "name" : "Australia"
    },
    {
        "_id" : 7,
        "name" : "Antractica"
    }
]

const price = [
    {
        "_id" : 0,
        "name" : "Any",
        "array" : []
    },
    {
        "_id" : 1,
        "name" : "$0 - $3000",
        "array" : [0, 3000]
    },
    {
        "_id" : 2,
        "name" : "$3000 - $6000",
        "array" : [3000, 6000]
    },
    {
        "_id" : 3,
        "name" : "$6000 - $9000",
        "array" : [6000, 9000]
    },
    {
        "_id" : 4,
        "name" : "more than 9000",
        "array" : [9001,1500000]
    },
]

export {
    continents,
    price
}
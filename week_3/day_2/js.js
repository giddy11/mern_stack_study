/**
 * Operators;
 * Arithmetic operators - +, -, *, /, %
 * Incremental/decremental - ++, --, +=, -=, *=, /=, %=
 * Logical / Conditional Operators - >, <, >=, <=, !=, ==
 * Logical Joining OP - AND(&&), OR (||)
 */

firstNum = 5
secondNum = 62
thirdNumber = 12



res = !(firstNum > secondNum) && (thirdNumber > firstNum)

// console.log(res)

/**
 * Objects
 */

car_object = {
    name: "BMW",
    color: "Red",
    year: 2009,
    price: 900000,
    isNigerianMade: false,
    manufacturers: ["man1", "man2", "man3"]
}

many_object = [
    {
        name: "Gideon",
        netWorth: 25000
    },
    {
        name: "Emmanuel",
        netWorth: 25245
    },
    {
        name: "Ifeanyi",
        netWorth: 25478
    }
]

// console.log(car_object.manufacturers[1])
console.log(many_object[1].netWorth);
console.log(many_object[2].name);
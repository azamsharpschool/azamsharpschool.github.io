// This is the history of actual sales from AzamSharp School. 
// This is not live data and the sales happened in the past. 
const recentSales = [
    "Markus purchased SwiftData Bootcamp on April 8",
    "Rudy purchased Pro Membership on April 8", 
    "Rafael purchased Swift & Vapor Bootcamp on April 8", 
    "Joshua purchased Pro Membership on March 13th", 
    "Arjun purchased SwiftData Fundamentals Workshop on March 9th", 
    "Ned purchased SwiftData Fundamentals Workshop on March 26th", 
    "Marek purchased Pro Membership on March 8th", 
    "Zachary purchased Introduction to Testing in iOS Using Swift Workshop on March 3rd", 
    "Clemens purchased Introduction to Testing i iOS Using Swift Workshop on April 19", 
    "Mario purchased Pro Membership on April 7", 
    "Kenneth purchased SwiftData Fundamentals Workshop on April 5", 
]

function getRecentSales() {
    const randomNumber = Math.floor(Math.random() * (recentSales.length - 0)) + 0;
    console.log(randomNumber)
    return recentSales[randomNumber]
}
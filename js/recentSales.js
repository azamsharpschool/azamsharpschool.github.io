// This is the history of actual sales from AzamSharp School. 
// This is not live data and the sales happened in the past. 
const recentSales = [
    "Nathan purchased Pro Membership on March 20th",
    "John purchased Swift & Vapor - Full Stack Development Bootcamp on March 18th",
    "Keven purchased Pro Membership on March 18th", 
    "Patrick purchased RealityKit Fundamentals - A Guide for Building AR Applications on March 13th", 
    "Joshua purchased Pro Membership on March 13th", 
    "Arjun purchased SwiftData Fundamentals Workshop on March 9th", 
    "Jeffery purchased Pro Membership on March 9th", 
    "Marek purchased Pro Membership on March 8th", 
    "Zachary purchased Introduction to Testing in iOS Using Swift Workshop on March 3rd", 
    "Edwin purchased Pro Membership on March 2nd", 
    "Alexdander purchased Core Data in iOS Bootcamp on Feb 28", 
    "Muhammad purchased Introduction to Server Side Swift Using Vapor Workshop on March 22nd", 
]

function getRecentSales() {
    const randomNumber = Math.floor(Math.random() * (recentSales.length - 0)) + 0;
    console.log(randomNumber)
    return recentSales[randomNumber]
}
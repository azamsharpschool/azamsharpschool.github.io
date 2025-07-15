// This is the history of actual sales from AzamSharp School. 
// This is not live data and the sales happened in the past. 
const recentSales = [
    "Sumit Oberoi purchased Annual Pro Membership.", 
    "Ned purchased Supabase for iOS Developers Workshop.", 
    "Alberto Diaz purchased Annual Pro Membership.", 
    "Allan Evans purchased Pro Membership", 
    "Roman Smirnov purchased Pro Membership", 
    "Isik Ozturkeri purchased Getting Started with Foundation Models Framework."
]

function getRecentSales() {
    const randomNumber = Math.floor(Math.random() * (recentSales.length - 0)) + 0;
    console.log(randomNumber)
    return recentSales[randomNumber]
}
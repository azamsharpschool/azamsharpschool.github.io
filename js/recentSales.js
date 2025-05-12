// This is the history of actual sales from AzamSharp School. 
// This is not live data and the sales happened in the past. 
const recentSales = [
    "Ociel purchased Supabase for iOS Developers.", 
    "Ned purchased Supabase for iOS Developers Workshop.", 
    "Alberto Diaz purchased Annual Pro Membership.", 
    "Smitty purchased Swift Language Fundamentals.", 
    "Allan Evans purchased Pro Membership"
]

function getRecentSales() {
    const randomNumber = Math.floor(Math.random() * (recentSales.length - 0)) + 0;
    console.log(randomNumber)
    return recentSales[randomNumber]
}
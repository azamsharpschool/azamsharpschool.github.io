// This is the history of actual sales from AzamSharp School. 
// This is not live data and the sales happened in the past. 
const recentSales = [
    "Ociel purchased Supase for iOS Developers.", 
    "Shakir purchased Pro Membership.", 
    "Lucas purchased Pro Membership.", 
    "Peter purchased Pro Membership.",
    "Jean purchased Pro Membership.", 
    "Ned purchased Supabase for iOS Developers Workshop."
]

function getRecentSales() {
    const randomNumber = Math.floor(Math.random() * (recentSales.length - 0)) + 0;
    console.log(randomNumber)
    return recentSales[randomNumber]
}
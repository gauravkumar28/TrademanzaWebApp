export const isAuthenticated = () => {
    if(typeof window == "undefined"){
        return false;
    }
    if(localStorage.getItem("id")){
        return true;
    }
}
// export  const  isPortfolioCreated  = async(contestId ) => {
//     if(isAuthenticated()){
//         const userId=localStorage.getItem("id");
//         console.log("fetching url",`https://stgapi.trademanza.com/portfolios?userId=${userId}&contestId=${contestId}`);
//         const res= await fetch(`https://stgapi.trademanza.com/portfolios?userId=${userId}&contestId=${contestId}`)
//         const data= await  res.json();
//         if(data.error) return false;
//         if(data.data.length>0) {
//                 return true;
//         }
//         return false;

//     }
// }
// export const getPortfolio = (contestId) => {
//     if(typeof window == "undefined"){
//         return false;
//     }
//     if(localStorage.getItem("id")){
//         const userId=localStorage.getItem("id");
//         fetch(`https://stgapi.trademanza.com/portfolios?userId=${userId}&contestId=${contestId}`)
//         .then(res => res.json())
//         .then(data => {
//             return data.data;
//         })
//     }
// }

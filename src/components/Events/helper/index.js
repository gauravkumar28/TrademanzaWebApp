export const isAuthenticated = () => {
    if(typeof window == "undefined"){
        return false;
    }
    if(localStorage.getItem("id")){
        return true;
    }
}

export const getPortfolio = (contestId) => {
    if(typeof window == "undefined"){
        return false;
    }
    if(localStorage.getItem("id")){
        // from here we wil get id of the user 
        const userId=localStorage.getItem("id");
        // const userId="5f8c45de46dcee5f2ab11517";
        let portfolioChecker=false;
        fetch(`https://stgapi.trademanza.com/portfolios?userId=${userId}&contestId=${contestId}`)
        .then(res => res.json())
        .then(data => {
            return data.data;
        })
    }
}
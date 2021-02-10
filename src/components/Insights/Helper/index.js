export const isAuthenticated = () => {
    if(typeof window == "undefined"){
        return false;
    }
    if(localStorage.getItem("id")){
        return true;
    }
    else return false;
}


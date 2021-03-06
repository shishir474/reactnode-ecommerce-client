import { API } from "../config";

export const signup = (name, email, password) => {
    // console.log(name,email,password);
    return fetch(`${API}/signup`, {
                method: "POST",
                headers:{
                    Accept: 'application/json',
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({name,email,password})
            })
            .then((res)=>{
                return res.json();
            })
            .catch((err)=>{
                console.log(err)
            })

}

export const signin = (email, password) => {
    // console.log(name,email,password);
    return fetch(`${API}/signin`, {
                method: "POST",
                headers:{
                    Accept: 'application/json',
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({email,password})
            })
            .then((res)=>{
                return res.json();
            })
            .catch((err)=>{
                console.log(err)
            })

}

export const authenticate = (data, next) => {
    if(typeof window !== undefined){
        localStorage.setItem('jwt', JSON.stringify(data));
        next();
    }
}

export const signout = (next) => {
    if(typeof window !== undefined){
        localStorage.removeItem('jwt');
        next();
        return fetch(`${API}/signout`, {
            method: 'GET'
        })
        .then(res => console.log('res', res))
        .catch(err => console.log(err))
    }
}

export const isAuthenticated = () => {
    if (typeof window === undefined){
        return false;
    }
    if (localStorage.getItem('jwt')){
        return JSON.parse(localStorage.getItem('jwt'));
    }
    else{
        return false;
    }
}
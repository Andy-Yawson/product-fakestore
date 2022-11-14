import base_url from "./baseUrl";
import {notifyUser} from "./general";

//sample request to make 
export let serverRequest = (type,param, data) => {

    let URL = base_url;

    return new Promise((resolve, reject) => {
        fetch(URL+param,{
            method: type,
            headers:{
                Accept: "application/json",
                "Content-Type": "application/json",
                "x-header-token": sessionStorage.getItem('token'),
            },
            body: JSON.stringify(data),
            // credentials: 'include',

        })
            .then((response) => response.json())
            .then((resp) => {
                resolve(resp)
            })
            .catch((error) => {
                reject(error)
            }).finally(()=>{
                // notifyUser('error','Sorry problem getting data','Error')
        })
    });
}


//this is for uploading the files.
export let serverRequestNoHeaders = (type,param, data) => {

    let URL = base_url;

    return new Promise((resolve, reject) => {
        fetch(URL+param,{
            method: type,
            body: data,
            headers:{
                "x-header-token": sessionStorage.getItem('token')
            }
        })
            .then((response) => response.json())
            .then((resp) => {
                resolve(resp)
            })
            .catch((error) => {
                reject(error)
            })
    });
}
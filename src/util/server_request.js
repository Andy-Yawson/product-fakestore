//sample request to make
export let serverRequest = (type,param, data) => {

    let URL = "https://fakestoreapi.com/";

    return new Promise((resolve, reject) => {
        fetch(URL+param,{
            method: type,
            headers:{
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
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

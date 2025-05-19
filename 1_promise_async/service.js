class Service{
    #data;

    constructor(){
        this.#data = people;
    }

    init(){
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.#data);
            }, 600)
        }) 
    }

    initInvalid(){
        return new Promise((_ , reject) =>{
            setTimeout(() => {
                reject("Nem valid");
            })
        })
    }

    realInit(num){
        return new Promise((resolve, reject) =>{
            if(num < 2){
                setTimeout(() =>{
                    resolve("Kettönél kevesebb van.")
                }, 1000)
            }
            else{
                setTimeout(()=>{
                    reject("Kettönél több van.")
                }, 1000)
            }
        })
    }
}

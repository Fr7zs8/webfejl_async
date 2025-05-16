const buyApple1 = (number) =>{
    if(number < 5){
        return Promise.resolve("Van " + number + " almánk"); //Statisus függvénye a promis osztálynak nem példányhoz kötött, hanem a classon belül elérhető a bemeneti parametere bármi lehet, Felöldott állapotu promissal tár vissza
    }
    else{
        return Promise.reject("Nincs " + number + " almánk.");
    }
}

const visszateres = buyApple1(4);
console.log(visszateres);
visszateres.then((value) =>{
    console.log(value);
}) // Feloldja ami a promisunkban van callbacket vár
console.log(visszateres);
//Hamarabb csinálta meg mint a thent Async jellege

buyApple1(6).catch((error) =>{
    console.log(error);
})

//Then ugyanazzal a promissal tér vissza tudjuk chainelni

buyApple1(7).then((value) =>{
    console.log(value);
}).catch((error) =>{
    console.log(error);
})


const buyApple2 = (number) =>{
    return new Promise(
        (resolve, reject) => {
            if(number < 5){
                resolve("Van " + number + " almánk");
            }
            else{
                reject("Nincs " + number + " almánk.");
            }
        }
    )
}

buyApple2(2).then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
})

//Settimeout 2 parameter callback nincs paramétere egy szám hogy mennyivel késleltesse a lefutását
// 0 szoktuk használni egy iteráciot shiftel
//setTimeout(() => {}, 4000);

const buyApple3 = (number) =>{
    return new Promise(
        (resolve, reject) => {
            if(number < 5){
                setTimeout(() =>{
                    resolve("Van " + number + " almánk");
                }, 1000)
            }
            else{
                setTimeout(() =>{
                    reject("Nincs " + number + " almánk.");
                }, 1000)
            }
        }
    )
}

buyApple3(9).then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
})


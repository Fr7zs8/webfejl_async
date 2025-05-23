const form = document.getElementById("fruitform");
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    const nevinput = document.getElementById("fruitname");
    const nevValue = nevinput.value;
    const priceinput = document.getElementById("fruitprice");
    const pricevalue = priceinput.value;

    const gyumiobj = {
        name: nevValue,
        price: pricevalue
    }

     //Promissal tér vissza
    fetch("http://127.0.0.1:63013/fruits", {method: "post", headers: {"Content-Type": "application/json"}, body: JSON.stringify(gyumiobj)}).then((response) =>{
        const visszateres = response.json();
        visszateres.then((value)  =>{
            console.log(value);
        })
    })
    


})
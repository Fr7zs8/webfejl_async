class ViewDataController{
    #div;

    constructor(){
        this.#div = document.createElement("div");
        document.body.appendChild(this.#div);
        this.#div.textContent = "Loading ...";
    }

    renderData(array){
        this.#div.textContent = "";
        for(let elem of array){
            const div = document.createElement("div");
            div.textContent = `${elem.name} - ${elem.age} - ${elem.sex}`;
            this.#div.appendChild(div);
        }
    }
}


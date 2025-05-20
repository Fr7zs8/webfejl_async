class Table{
    #div;

    constructor(manager){
        this.#div = document.createElement("div");
        document.body.appendChild(this.#div);
        this.manager = manager;
        manager.setRenderCallback(data =>{this.updateTable(data)});
    }

    updateTable(data){
        this.#div.innerHTML = "";
        for(const elem of data){
            const div = document.createElement("div");
            div.textContent = `${elem.name} ${elem.age} rendelkezik egy ${elem.car.color} színú ${elem.car.type} típusú autoval.`;
            this.#div.appendChild(div);
        }
    }
}
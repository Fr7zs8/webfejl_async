class Loader{
    #manager;
    #service;

    constructor(manager, service){
        this.#manager = manager;
        this.#service = new Service();
        const button = document.createElement("button");
        button.innerHTML = "Katt";
        document.body.appendChild(button);
        button.addEventListener("click", () =>{
            this.#service.init()
        })

    }


}
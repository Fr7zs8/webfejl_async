class Loader{
    constructor(manager, service){
        this.manager = manager;
        this.service = service;
        const button = document.createElement("button");
        button.innerHTML = "Katt";
        document.body.appendChild(button);
        button.addEventListener("click", () =>{
            service.init().then(data => {
                manager.render(data);
            })
        })

    }
}
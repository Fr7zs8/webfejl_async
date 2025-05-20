class Manager{
    #rebdercallback;

    constructor(){
        this.#rebdercallback = null;
    }

    setRenderCallback(callback){
        this.#rebdercallback = callback;
    }

    render(data){
        this.#rebdercallback(data);
    }


}
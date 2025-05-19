const service = new Service();
const view = new ViewDataController();

service.init().then((value) => {
    view.renderData(value);
});

service.initInvalid().catch((value)=>{
    view.renderError(value)
})

service.realInit().then((value) =>{
    view.renderData(value);
}).catch((value) =>{
    view.renderError(value);
})
const service = new Service();
const view = new ViewDataController();

service.init().then((value) => {
    view.renderData(value);
});
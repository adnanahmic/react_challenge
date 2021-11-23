"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const eventController_1 = require("../controllers/eventController");
class Routes {
    constructor() {
        this.event_controller = new eventController_1.EventController();
    }
    route(app) {
        app.get('/api/event', (req, res) => {
            this.event_controller.fetch_event(req, res);
        });
        app.post('/api/event', (req, res) => {
            this.event_controller.create_event(req, res);
        });
        app.put('/api/event', (req, res) => {
            this.event_controller.update_event(req, res);
        });
    }
}
exports.Routes = Routes;

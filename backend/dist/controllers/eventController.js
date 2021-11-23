"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventController = void 0;
const service_1 = require("../modules/common/service");
const service_2 = require("../modules/events/service");
class EventController {
    constructor() {
        this.event_service = new service_2.default();
    }
    fetch_event(req, res) {
        try {
            this.event_service.getEvent((err, event) => {
                if (err) {
                    (0, service_1.mongoError)(err, res);
                }
                else {
                    (0, service_1.successResponse)("", event, res);
                }
            });
        }
        catch (_a) {
            (0, service_1.insufficientParameters)(res);
        }
    }
    create_event(req, res) {
        try {
            const event_data = {
                event_flow: req.body.event_flow,
                modification_notes: [
                    {
                        modified_on: new Date(Date.now()),
                        modified_by: null,
                        modification_note: "New event created",
                    },
                ],
            };
            this.event_service.createEvent(event_data, (err, event_data) => {
                if (err) {
                    (0, service_1.mongoError)(err, res);
                }
                else {
                    (0, service_1.successResponse)("created event successfull", event_data, res);
                }
            });
        }
        catch (_a) {
            (0, service_1.insufficientParameters)(res);
        }
    }
    update_event(req, res) {
        try {
            this.event_service.updateEvent(req.body, (err) => {
                if (err) {
                    (0, service_1.mongoError)(err, res);
                }
                else {
                    (0, service_1.successResponse)("update event successfull", null, res);
                }
            });
        }
        catch (_a) {
            (0, service_1.insufficientParameters)(res);
        }
    }
}
exports.EventController = EventController;

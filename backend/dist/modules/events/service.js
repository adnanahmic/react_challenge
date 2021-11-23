"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("./schema");
class EventService {
    getEvent(callback) {
        schema_1.default.findOne().exec(callback);
    }
    createEvent(event_params, callback) {
        const event = new schema_1.default(event_params);
        event.save(callback);
    }
    updateEvent(event_params, callback) {
        const query = { _id: event_params._id };
        schema_1.default.findOneAndUpdate(query, event_params, callback);
    }
}
exports.default = EventService;

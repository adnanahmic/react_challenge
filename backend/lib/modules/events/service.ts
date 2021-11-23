import { IEvent } from './model';
import events from './schema';

export default class EventService {
    
    public getEvent(callback: any) {
        events.findOne().exec(callback);
    }

    public createEvent(event_params: IEvent, callback: any) {
        const event = new events(event_params);
        event.save(callback);
    }

    public updateEvent(event_params: IEvent, callback: any) {
        const query = { _id: event_params._id };
        events.findOneAndUpdate(query, event_params, callback);
    }

}
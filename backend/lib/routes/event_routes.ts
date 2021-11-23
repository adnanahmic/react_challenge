import { Application, Request, Response } from 'express';
import { EventController } from '../controllers/eventController';

export class Routes {

    private event_controller: EventController = new EventController();

    public route(app: Application) {

        app.get('/api/event', (req: Request, res: Response) => {
            this.event_controller.fetch_event(req, res);
        });
        
        app.post('/api/event', (req: Request, res: Response) => {
            this.event_controller.create_event(req, res);
        });

        app.put('/api/event', (req: Request, res: Response) => {
            this.event_controller.update_event(req, res);
        });
    }
}
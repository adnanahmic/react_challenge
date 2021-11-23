import { Request, Response } from "express";
import {
  insufficientParameters,
  mongoError,
  successResponse,
} from "../modules/common/service";
import { IEvent } from "../modules/events/model";
import EventService from "../modules/events/service";
import e = require("express");

export class EventController {
  private event_service: EventService = new EventService();

  public fetch_event(req: Request, res: Response) {
    try {
      this.event_service.getEvent((err: any, event: IEvent) => {
        if (err) {
          mongoError(err, res);
        } else {
          successResponse("", event, res);
        }
      });
    } catch {
      insufficientParameters(res);
    }
  }

  public create_event(req: Request, res: Response) {
    try {
      const event_data: IEvent = {
        event_flow: req.body.event_flow,
        modification_notes: [
          {
            modified_on: new Date(Date.now()),
            modified_by: null,
            modification_note: "New event created",
          },
        ],
      };
      this.event_service.createEvent(
        event_data,
        (err: any, event_data: IEvent) => {
          if (err) {
            mongoError(err, res);
          } else {
            successResponse("created event successfull", event_data, res);
          }
        }
      );
    } catch {
      insufficientParameters(res);
    }
  }

  public update_event(req: Request, res: Response) {
    try {
      this.event_service.updateEvent(req.body, (err: any) => {
        if (err) {
          mongoError(err, res);
        } else {
          successResponse("update event successfull", null, res);
        }
      });
    } catch {
      insufficientParameters(res);
    }
  }
}

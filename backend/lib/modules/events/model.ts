import { ModificationNote } from "../common/model";

export interface IEvent {
    _id?: String
    event_flow: Object
    modification_notes: ModificationNote[]
}
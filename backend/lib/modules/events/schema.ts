import * as mongoose from 'mongoose';
import { ModificationNote } from '../common/model';

const Schema = mongoose.Schema;

const schema = new Schema({
    event_flow: Object,
    modification_notes: [ModificationNote]
});

export default mongoose.model('events', schema);
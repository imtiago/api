import { IRent } from '../models/rent';
import { ICRUDDatabase } from './ICRUDDatabase';

export interface IRentDatabase extends ICRUDDatabase<IRent> {}

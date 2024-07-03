import { IMovie } from '../models/movie';
import { ICRUDDatabase } from './ICRUDDatabase';

export interface IMovieDatabase extends ICRUDDatabase<IMovie> {}

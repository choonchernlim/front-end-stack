import { applyMiddleware } from 'redux';
import { middleware as chuckNorrisMiddleware } from '../chuck-norris';

export default applyMiddleware(chuckNorrisMiddleware);

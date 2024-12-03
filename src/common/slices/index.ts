import { combineReducers } from 'redux';
import initSlice from './initSlice';

const rootReducer = combineReducers({
    init: initSlice,
});

export default rootReducer;
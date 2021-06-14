import {combineReducers} from 'redux';
import todos from './form';
import edit from './edit';

const rootReducer= combineReducers({
    todos,
    edit,
});
export default rootReducer;
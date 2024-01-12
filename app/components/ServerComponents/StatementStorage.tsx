 import { createStore } from 'redux';
import { rootReducer } from './StateManagement';


const store = createStore(rootReducer);

export default store;
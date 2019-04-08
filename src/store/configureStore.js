import { createStore,applyMiddleware,combineReducers,compose} from 'redux' ;

import placesReducer from './reducers/places' ;

import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer=combineReducers({
    places :placesReducer,

})

const configureStore =() =>{
    return createStore(rootReducer ,composeWithDevTools(

      ) );
}
export default configureStore;

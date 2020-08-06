import { createStore, combineReducers} from 'redux';
import { reducer as formReducer} from 'redux-form';
import ImagesReducer from './reducer_img';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createForms} from 'react-redux-form';
import { InitialFeedback} from './forms';
import logger from 'redux-logger';




export const ConfigureStore=() =>{
    const store = createStore(
    combineReducers({
        images: ImagesReducer,
        ...createForms({
            feedback: InitialFeedback
        })
       }),
       applyMiddleware(thunk,logger)
    
    );
    return store;
}
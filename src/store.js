import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

const setRank = (state=[], action) => {
    if(action.type === "ADD_RANKING"){
        let rankUpdate = [...state, action.payload]
        return rankUpdate
    }
    return state
}

const store = createStore(
    combineReducers({
        setRank
    }),
    applyMiddleware(logger),
  );
  
  
  export default store;
  

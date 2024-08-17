import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

const feelingRank = (state=(''), action) => {
    if(action.type === "FEELING_RANK"){
        let rankUpdate = action.payload
        return rankUpdate
    }
    else if(action.type === "CLEAR_ALL") {
        let rankUpdate = action.payload
        return rankUpdate
    }
    return state
}
const understandRank = (state=(''), action) => {
    if(action.type === "UNDERSTAND_RANK"){
        let rankUpdate = action.payload
        return rankUpdate
    }
    else if(action.type === "CLEAR_ALL") {
        let rankUpdate = action.payload
        return rankUpdate
    }
    return state
}
const supportedRank = (state=(''), action) => {
    if(action.type === "SUPPORTED_RANK"){
        let rankUpdate = action.payload
        return rankUpdate
    }
    else if(action.type === "CLEAR_ALL") {
        let rankUpdate = action.payload
        return rankUpdate
    }
    return state
}
const comments = (state=(''), action) => {
    if(action.type === "COMMENTS"){
        let rankUpdate = action.payload
        return rankUpdate
    }
    else if(action.type === "CLEAR_ALL") {
        let rankUpdate = action.payload
        return rankUpdate
    }
    return state
}
const store = createStore(
    combineReducers({
        feelingRank,
        supportedRank,
        understandRank,
        comments
    }),
    applyMiddleware(logger),
  );
  
  
  export default store;
  

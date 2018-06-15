const redux = require('redux');
const createStore = redux.createStore;
const intialState ={
    counter:0
}
//reducer
const rootReducer = (state = intialState,action) =>{
    if(action.type ==='INC_COUNTER'){
        return{
            ...state,
            counter:state.counter+1
        }
    }

    if(action.type ==='ADD_COUNTER'){
        return{
            ...state,
            counter:state.counter + action.value
        }
    }
    
    return state;
}

//state
 const state = createStore(rootReducer);
 console.log(state.getState());

 //subscription
 state.subscribe(()=>{
    console.log('[subscription]',state.getState())
})
 //action
 state.dispatch({
     type:'INC_COUNTER'
 });
 state.dispatch({
     type:'ADD_COUNTER',
     value:10
 });
 console.log(state.getState());


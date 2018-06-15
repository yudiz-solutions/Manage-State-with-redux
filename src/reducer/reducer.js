const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state, counter: state.counter + 1
            }

        case 'DECREMENT':
            return {
                ...state, counter: state.counter - 1
            }

        case 'ADD':
            return {
                ...state, counter: state.counter + action.value
            }

        case 'SUBTRACT':
            return {
                ...state, counter: state.counter - action.value
            }

        case 'STORE_RESULT':
 
            return {
                ...state,
                results: state.results.concat({key:new Date(),val:state.counter})
            }
            case 'DELETE_RESULT':
          console.log(action.resultElId)
           const updatedArray = state.results.filter(result=>    
           result.key !== action.resultElId);
           console.log(updatedArray)
           return {
                ...state,
               results:updatedArray
            }
        default:
            return {
               ...state,
                counter: state.counter
            }
    }

    return state;
}

export default reducer;
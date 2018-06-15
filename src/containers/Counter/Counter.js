import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter} />
                <hr />
                <button onClick={this.props.onStoreResult}>Show Result</button>
                <ul>
                    {this.props.storedResult.map(strResult => (
                        <li key={strResult.key} onClick={() => this.props.deleteResult(strResult.key)}>{strResult.val}</li>
                    ))}

                </ul>
            </div>
        );
    }
}

const mapStateToProp = state => {
    return {
        ctr: state.counter,
        storedResult: state.results
    }
}
const mapDispatchToProp = dispatch => {
    return {
        onIncrementCounter: () => { dispatch({ type: 'INCREMENT' }) },
        onDecrementCounter: () => { dispatch({ type: 'DECREMENT' }) },
        onAddCounter: () => { dispatch({ type: 'ADD', value: 5 }) },
        onSubtractCounter: () => { dispatch({ type: 'SUBTRACT', value: 5 }) },
        onStoreResult: () => { dispatch({ type: 'STORE_RESULT' }) },
        deleteResult: (id) => { dispatch({ type: 'DELETE_RESULT', resultElId:id}) }
    }
}
export default connect(mapStateToProp, mapDispatchToProp)(Counter);
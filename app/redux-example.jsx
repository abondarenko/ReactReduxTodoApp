var redux = require('redux');

console.log('Starting redux example');

// Pure functions
// 1. Always the same output with the same input
// 2. No side effects
// 3. No async
// 4. No changed of input

var reducer = (state = {name: 'Anonymous'}, action) => {
    // state = state || {name: 'Anonymous'};
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };
        default:
            return state;
    }
};

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// subscribe to changes
var unsubscribe = store.subscribe(() => {
    var state = store.getState();
    console.log('Name is', state.name);
    document.getElementById('app').innerHTML = state.name;
});

// unsubscribe();

console.log('currentState', store.getState());

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Alex'
});

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Billy'
});

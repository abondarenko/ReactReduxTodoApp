var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {searchtext: '', showCompleted: false, todos: []};
var reducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'CHANGE_SEARCH_TEXT':
            return {
                ...state,
                searchtext: action.searchtext
            };
        default:
            return state;
    }
};

var store = redux.createStore(reducer);
console.log('currentState', store.getState());

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchtext: 'something to find'
});
console.log('currentState', store.getState());

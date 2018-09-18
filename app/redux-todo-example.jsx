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

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

store.subscribe(() => {
    var state = store.getState();
    console.log('Search text is', state.searchtext);
});

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchtext: 'something to find'
});

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchtext: 'another search term'
});

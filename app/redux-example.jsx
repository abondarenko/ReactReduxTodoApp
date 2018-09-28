var redux = require('redux');

console.log('Starting redux example');

// Pure functions
// 1. Always the same output with the same input
// 2. No side effects
// 3. No async
// 4. No changed of input

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

// subscribe to changes
var unsubscribe = store.subscribe(() => {
    var state = store.getState();
    console.log('New state', store.getState());

    if (state.map.isFetching) {
        document.getElementById('app').innerHTML = 'Loading...';
    } else if (state.map.url) {
        document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View Your Location</a>';
    }
});

// unsubscribe();

console.log('currentState', store.getState());

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Alex'));

store.dispatch(actions.addHobby('Running'));

store.dispatch(actions.addHobby('Walking'));

store.dispatch(actions.addMovie('Gone in 60s', 'action'));

store.dispatch(actions.addMovie('Blair Witch', 'horror'));

store.dispatch(actions.changeName('Billy'));

store.dispatch(actions.removeHobby(2));

store.dispatch(actions.removeMovie(1));

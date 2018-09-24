var redux = require('redux');

console.log('Starting redux example');

// Pure functions
// 1. Always the same output with the same input
// 2. No side effects
// 3. No async
// 4. No changed of input

var stateDefault = {
    name: 'Anonymous',
    hobbies: [],
    movies: []
};
var nextHobbyId = 1;
var nextMovieId = 1;
var reducer = (state = stateDefault, action) => {
    // state = state || {name: 'Anonymous'};
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };
        case 'ADD_HOBBY':
            return {
                ...state,
                hobbies: [
                    ...state.hobbies,
                    {
                        id: nextHobbyId++,
                        hobby: action.hobby
                    }
                ]
            };
        case 'REMOVE_HOBBY':
            return {
                ...state,
                hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
            };
        case 'ADD_MOVIE':
            return {
                ...state,
                movies: [
                    ...state.movies,
                    {
                        id: nextMovieId++,
                        movie: action.movie,
                        genre: action.genre
                    }
                ]
            };
        case 'REMOVE_MOVIE':
            return {
                ...state,
                movies: state.movies.filter((movie) => movie.id !== action.id)
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
    console.log('New state', store.getState());
});

// unsubscribe();

console.log('currentState', store.getState());

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Alex'
});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Running'
});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Walking'
});

store.dispatch({
    type: 'ADD_MOVIE',
    movie: 'Gone in 60s',
    genre: 'action'
});

store.dispatch({
    type: 'ADD_MOVIE',
    movie: 'Blair Witch',
    genre: 'horror'
});

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Billy'
});

store.dispatch({
    type: 'REMOVE_HOBBY',
    id: 2
});

store.dispatch({
    type: 'REMOVE_MOVIE',
    id: 1
});

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
// import thunk from 'redux-thunk';
// import {createStore, applyMiddleware} from 'redux';
// import rootReducer from './Reducer'
// import {getFirestore} from 'redux-firestore';
// import {getFirebase}  from 'react-redux-firebase' ;


// const store = createStore(rootReducer, applyMiddleware (thunk.withExtraArgument({getFirebase, getFirestore})));

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

//This is creating the store.
// THe store is the big javascript object that holds all of the information for our application.
const storeInstance = createStore(
    ///this function is our first reducer.
    //A reducer is a function that runs every time an action is dispatched.
    () => {
        console.log('heyo im a reducer.')
    },
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

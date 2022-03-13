import React from 'react';
import {render} from 'react-dom';
import {rootReducer} from "./redux/reducers/rootReducer";
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {CoreReducer} from "./redux/reducers/CoreReducer";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));


const app = (
    <Provider store={store}>
         <BrowserRouter>
            <App/>
         </BrowserRouter>
     </Provider>
);

render(app, document.getElementById('root'));


// reportWebVitals();

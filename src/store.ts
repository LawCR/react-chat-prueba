import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk'
import reducer from './reducers'

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    compose(applyMiddleware(thunk),
    composeEnhancers())
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
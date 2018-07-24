import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import combinedReducers from './combinedReducers';
import rootSaga from './rootSaga';
import { Map } from 'immutable';

const sagaMiddleware = createSagaMiddleware();

const initialState = Map();

const store = createStore(
  combinedReducers,
  initialState,
  compose(
    applyMiddleware(
    sagaMiddleware,
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

sagaMiddleware.run(rootSaga)

export default store;
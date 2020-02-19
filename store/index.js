import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import rootReducer from '../reducers/index';
import rootSaga from '../sagas/index';


const sagaMiddleWare = createSagaMiddleWare();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);
export default store;

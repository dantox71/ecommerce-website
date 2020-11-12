import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';



import { fetchCollectionsStart } from './shop/shop.sagas';

import rootSaga from './root-saga';
import rootReducer from './root-reducer';


const sagaMiddleware = createSagaMiddleware();


const middlewares = [sagaMiddleware];

// Use logger in development only
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));



sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };
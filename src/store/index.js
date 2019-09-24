import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import persistReducer from './persistReducers';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;
const sagaMidleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMidleware];

const store = createStore(persistReducer(rootReducer), middlewares);
const persistor = persistStore(store);
sagaMidleware.run(rootSaga);

export { store, persistor };

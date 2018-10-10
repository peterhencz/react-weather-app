import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/RootReducer';
import mySaga from './sagas'

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware),
  );
  sagaMiddleware.run(mySaga)
  return store;
}

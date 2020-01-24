import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { currenciesReducer } from './currencies/reducer';
import { favoriteCurrenciesReducer } from './favoriteCurrencies/reducer';

const rootReducer = combineReducers({
  currencies: currenciesReducer,
  favoriteCurrencies: favoriteCurrenciesReducer,
});

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  return {
    ...createStore(rootReducer, composeWithDevTools(middleWareEnhancer)),
    runSaga: sagaMiddleware.run,
  };
}

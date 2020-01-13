import { takeEvery, fork, put } from "redux-saga/effects";

import * as currenciesActions from "./currencies/actions";
import * as currenciesTypes from "./currencies/types";
import * as currenciesSagas from "./currencies/sagas";

export function* getData() {
  yield put(currenciesActions.CurrenciesFetch());
}

export function* startup() {
  yield fork(getData);
}

export default function* root() {
  yield fork(startup);

  yield takeEvery(
    currenciesTypes.CURRENCIES_FETCH,
    currenciesSagas.doCurrenciesFetch
  );
}

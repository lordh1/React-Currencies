import { put, call } from "redux-saga/effects";
import * as currenciesActions from "./actions";
import CurrenciesService from "../../services/currencies.service";

export function* doCurrenciesFetch() {
  const currenciesService = new CurrenciesService();
  const response = yield call(currenciesService.get);

  if (response.status === 200) {
    yield put(currenciesActions.CurrenciesSet(response.json[0]));
  }
}

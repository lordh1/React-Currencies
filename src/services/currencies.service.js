import { currenciesInitState } from '../store/currencies/reducer';

export default class CurrenciesService {
  constructor() {
    this.apiUrl = `${process.env.REACT_APP_API_URL}`;
  }

  get = () => {
    const options = {
      method: 'GET',
    };

    return fetch(`${this.apiUrl}`, options)
      .then(async response => {
        return {
          status: response.status,
          json:
            response.status === 200
              ? await response.json()
              : currenciesInitState,
        };
      })
      .catch(error => {
        throw error;
      });
  };
}

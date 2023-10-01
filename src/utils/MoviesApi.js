export class MoviesApi {
  constructor (options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse (res) {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies () {
    return fetch(`${this._baseUrl}`, {
      method: 'GET',
      //credentials: 'include',
      //headers: this._headers
    })
    .then(res => this._checkResponse(res))
  }
}



const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json',
  }
});

export default moviesApi;
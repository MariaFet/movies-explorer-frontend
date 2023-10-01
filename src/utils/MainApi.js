export class MainApi {
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

  getUserInfo () {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers
    })
    .then(res => this._checkResponse(res))
  }

  getSavedMovies () {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers
    })
    .then(res => this._checkResponse(res))
  }

  editUserInfo (data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        email: data.email
      })
    })
    .then(res => this._checkResponse(res))
  }

  saveMovie (data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify(data),
    })
    .then(res => this._checkResponse(res))
  }

  deleteMovie (movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers
    })
    .then(res => this._checkResponse(res))
  }
}

const mainApi = new MainApi({
  baseUrl: 'https://api.movies.bymaria.nomoredomainsicu.ru',
  // baseUrl: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  }
});

export default mainApi;
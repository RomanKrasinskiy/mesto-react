import { apiConfig } from "./constants";

class Api {
  constructor(apiConfig) {
    this._url = apiConfig.url;
    this._headers = apiConfig.headers;
  }

  getAllCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    }).then(this._chechResponse);
  }

  getInfoProfile() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    }).then(this._chechResponse);
  }

  setUserInfo(inputValues) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: inputValues.name,
        about: inputValues.about,
      }),
    }).then(this._chechResponse);
  }

  addCard(card) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: card.name,
        link: card.link,
      }),
    }).then(this._chechResponse);
  }

  delCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._chechResponse);
  }

  changeLikeCardStatus(cardId, isLiked) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: isLiked ? "PUT" : "DELETE",
      headers: this._headers,
    }).then(this._chechResponse);
  }

  changeAvatar(urlAvatar) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: urlAvatar.avatar,
      }),
    }).then(this._chechResponse);
  }

  _chechResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

export const api = new Api(apiConfig);

import { options } from '../constants/constants'

export class MainApi {
  constructor(baseUrl, headers) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  async signin(email, password) {
    return fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(res => {
        if (res.ok) return res.json()
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(result => {
        return result.token;
      })
      .catch((err) => { return err });
  }

  async signup(email, password, name) {
    return await fetch(`${this.baseUrl}/signup`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        email: email,
        password: password,
        name: name
      })
    })
      .then((res) => {
        if (res.ok) return res.json();
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((result) => {
        return result;
      })
      .catch((err) => { return err });
  }

  async getUserName() {
    return await fetch(`${this.baseUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
    })
      .then(async res => {
        if (res.ok) return await res.json();
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(result => result)
      .catch((err) => { return err });
  }

  async getSavedArticles() {
    return await fetch(`${this.baseUrl}/articles`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.token}`,
        'Content-Type': 'application/json'
      },
    })
      .then((res) => {
        if (res.ok) return res.json();
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((result) => {
        return result;
      })
      .catch((err) => { return err });
  }

  async addArticle(event) {
    return fetch(`${this.baseUrl}/articles`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: event.target.parentNode.children[4].textContent,
        text: event.target.parentNode.children[5].textContent,
        date: event.target.parentNode.children[3].textContent,
        source: event.target.parentNode.children[6].textContent,
        link: event.target.parentNode.getAttribute('href'),
        image: event.target.parentNode.children[0].getAttribute('src'),
        keyword: options.currentSearchInput
      })
    })
      .then((res) => {
        if (res.ok) return res.json();
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(async (result) => {
        return await result;
      })
      .catch((err) => { console.log(err) })
  }

  async deleteArticle(event) {
    await fetch(`${this.baseUrl}/articles/${event.target.parentNode.getAttribute('id')}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        if (res.ok)
          return res.json();
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => {
        return err;
      })
  }
}
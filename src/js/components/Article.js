import { api } from '../index'
import { resultsCards } from '../constants/constants'
import { getSavedArticles } from '../homepage'

export class Article {
  constructor(article, fulldate, id) {
    this.article = article;
    this.fulldate = fulldate
    this.id = id
  }

  async deleteArticle(event) {
    event.preventDefault()
    event.stopImmediatePropagation();
    await api.deleteArticle(event)
    getSavedArticles()
    resultsCards.forEach(item => item.removeChild(event.target.parentNode))
  }

  wasteOnHandler(event) {
    event.target.classList.replace("results__waste_white-waste", "results__waste_black-waste")
    event.target.nextSibling.nextElementSibling.classList.replace("results__card-delete_invisible", "results__card-delete")
  }

  wasteOutHandler(event) {
    event.target.classList.replace("results__waste_black-waste", "results__waste_white-waste")
  }

  async bookmarkArticle(event) {
      event.preventDefault()
      event.stopImmediatePropagation()
    if (localStorage.getItem('token')) {
      if (event.target.classList.contains("results__card-bookmark_blue-flag")) {
        api.deleteArticle(event)
        event.target.classList.replace("results__card-bookmark_blue-flag", "results__card-bookmark_white-flag")
      }
      else {
        event.target.classList.replace("results__card-bookmark_white-flag", "results__card-bookmark_blue-flag");
        const result = await api.addArticle(event)
        event.target.parentNode.setAttribute("id", result.data['_id'])
      }
    }
      else {
        event.target.nextElementSibling.classList.replace("results__card-author-expected_invisible", "results__card-author-expected_visible")
        setTimeout(() => {
          event.target.nextElementSibling.classList.replace("results__card-author-expected_visible", "results__card-author-expected_invisible")
        }, 2000)
      }
  }

  bookmarkMouseOn(event) {
    if (!localStorage.getItem('token')) {
      event.target.nextElementSibling.classList.replace("results__card-author-expected_invisible", "results__card-author-expected_visible")
      setTimeout(() => {
        event.target.nextElementSibling.classList.replace("results__card-author-expected_visible", "results__card-author-expected_invisible")
      }, 3000)
        }
      }

  create() {
    if (this.id) {
      return `<a class="results__card" href="${this.article.link}" id="${this.id}" target="_blank">
            <img src="${this.article.image}" alt="picture" class="results__card-image">
            <button class="results__waste results__waste_white-waste" name="waste"></button>
            <button class="results__card-delete results__card-delete_invisible" name="delete_alert">Убрать из сохраненных</button>
            <p class="results__card-category">${this.article.keyword}</p>
            <p class="results__card-date">${this.article.date}</p>
            <p class="results__card-title">${this.article.title}</p>
            <div class="results__card-preread">${this.article.text}</div>
            <p class="results__card-source">${this.article.source}</p>
          </a>`;
    }
    else {
      return `<a class="results__card" href="${this.article.url}" target="_blank">
            <img src="${this.article.urlToImage}" alt="picture" class="results__card-image">
            <button class="results__card-bookmark results__card-bookmark_white-flag" name="bookmark"></button>
            <p class="results__card-author-expected results__card-author-expected_invisible">Войдите, чтобы сохранять статьи</p>
            <p class="results__card-date">${this.fulldate}</p>
            <p class="results__card-title">${this.article.title}</p>
            <div class="results__card-preread">${this.article.description}</div>
            <p class="results__card-source">${this.article.source.name}</p>
          </a>`;
    }
  }
}
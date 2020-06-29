import {
  resultsBlock, notFound, bookmarks, loading, searchInput,
  resultsTitle, resultsButton, cards, searchAction, resultsCards
} from '../constants/constants'

import { NewsApi } from '../api/NewsApi'
import { Article } from './Article'
import { eventListeners } from '../components/newsCard'
import { options } from '../index'

let currentIndex = 0;

searchAction.forEach(item => item.addEventListener('click', async event => {
  if (searchInput.value !== "") {
    resultsCards.forEach(item => {
      while (item.firstChild) {
        item.removeChild(item.lastChild)
      }
    })
    options.currentSearchInput = searchInput.value
    localStorage.removeItem("articles")
    event.preventDefault()
    resultsBlock.classList.replace("results_visible", "results_invisible")
    if (notFound.classList.contains("not-found_visible")) notFound.classList.replace("not-found_visible", "not-found_invisible")
    bookmarks.forEach(item => {
      item.classList.replace("results__card-bookmark_invisible", "results__card-bookmark")
    })
    loading.classList.replace("loading_invisible", "loading")
    loading.children.forEach(item => item.classList.replace("loading_invisible", "loading"))
    const newsApi = new NewsApi("eeff81fa19344fc1a70eb8d1678c573a", searchInput.value);
    let articles = await newsApi.getNewsArticles()
    if (articles.articles.length === 0) {
      loading.classList.replace("loading", "loading_invisible")
      loading.children.forEach(item => item.classList.replace("loading", "loading_invisible"))
      notFound.classList.replace("not-found_invisible", "not-found_visible")
    }
    else {
      localStorage.setItem("articles", JSON.stringify(articles.articles))
      cardsGenerate();
      loading.classList.replace("loading", "loading_invisible")
      loading.children.forEach(item => item.classList.replace("loading", "loading_invisible"))
      results.classList.replace("results_invisible", "results_visible")
      resultsTitle.classList.replace("results__title_invisible", "results__title")
      resultsButton.classList.replace("results__button_invisible", "results__button")
    }
  }
  else {
    event.target.previousElementSibling.setAttribute("placeholder", "Необходимо ввести тему")
  }
}))


const cardsGenerate = (articles=JSON.parse(localStorage.articles), index = currentIndex) => {
  do {
        let fulldate = articles[index].publishedAt.slice(8, 10) + '.' + articles[index].publishedAt.slice(5, 7) + '.' + articles[index].publishedAt.slice(0, 4)
        let element = new Article(articles[index], fulldate).create();
        cards.forEach(item => {
          item.insertAdjacentHTML('beforeend', element)
        });
          eventListeners();
          index++;
        }
       while ((index % 3) !== 0);
  currentIndex = index;
}

resultsButton.addEventListener('click', () => {
  cardsGenerate()
})
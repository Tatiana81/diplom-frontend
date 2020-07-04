import {
  authorLinks, exitLinks, mainLinks, loginPopup, grey,
  savedSubmenus, exitSubmenus, resultsBlock, searchAction, searchInput,
  notFound, bookmarks, resultsTitle, resultsButton, options
} from '../constants/constants.js'
import { clearResultsBlock} from '../utils/clearResults'

import { cardsGenerate} from '../components/newsCardList'
import { setEscapeListener } from '../utils/escapeListener'
import { Popup } from './Popup'
import { NewsApi } from '../api/NewsApi'


const popup = new Popup();

authorLinks.forEach(item => {
  item.addEventListener('click', () => {
    popup.open(loginPopup)
    grey.classList.replace("grey_invisible", "grey_visible")
    setEscapeListener();
  })
})

exitLinks.forEach(item => {
  item.addEventListener('click', () => {
    localStorage.removeItem('token')
    localStorage.removeItem('savedArticles')
    localStorage.removeItem('userName')
    authorSubmenu.forEach(item => {
      item.classList.replace("header__menu-subtitle_invisible","header__menu-subtitle_visible")
    })
    savedSubmenus.forEach(item => {
      item.classList.replace("header__menu-subtitle_visible","header__menu-subtitle_invisible")
    })
    exitSubmenus.forEach(item => {
      item.classList.replace("header__menu-subtitle_visible","header__menu-subtitle_invisible")
    })
})
})

mainLinks.forEach(item => {
  item.addEventListener('click', event => {
    resultsBlock.classList.replace("results", "results_invisible")
    about.classList.replace("about_invisible","about")
  })
})

const getNewsArticles = async event => {
  if (searchInput.value !== "") {
    options.currentSearchInput = searchInput.value
    event.target.previousElementSibling.diasbled = true
    event.target.disabled = true
    const newsApi = new NewsApi("eeff81fa19344fc1a70eb8d1678c573a", searchInput.value);
    const result = await newsApi.getNewsArticles()
    resultsBlock.classList.replace("results_visible", "results_invisible")
    if (notFound.classList.contains("not-found_visible"))
      notFound.classList.replace("not-found_visible", "not-found_invisible")
    bookmarks.forEach(item => {
      item.classList.replace("results__card-bookmark_invisible", "results__card-bookmark")
    })
    loading.classList.replace("loading_invisible", "loading")
    loading.children.forEach(item => item.classList.replace("loading_invisible", "loading"))
    if (result.articles) {
      event.target.previousElementSibling.diasbled = false
      event.target.disabled = false
      if (result.articles.length === 0) {
        loading.classList.replace("loading", "loading_invisible")
        loading.children.forEach(item => item.classList.replace("loading", "loading_invisible"))
        notFound.classList.replace("not-found_invisible", "not-found_visible")
      }
      else {
        localStorage.removeItem("articles")
        clearResultsBlock()
        localStorage.setItem("articles", JSON.stringify(result.articles))
        cardsGenerate();
        loading.classList.replace("loading", "loading_invisible")
        loading.children.forEach(item => item.classList.replace("loading", "loading_invisible"))
        results.classList.replace("results_invisible", "results_visible")
        resultsTitle.classList.replace("results__title_invisible", "results__title")
        resultsButton.classList.replace("results__button_invisible", "results__button_visible")
      }
    }
    else {
      if (result == "TypeError: Failed to fetch") {
        alert("Потеряно соединение с сервером. Попобруйте повторить попытку или обратитесь к провайдеру ");
        loading.classList.replace("loading", "loading_invisible")
        loading.children.forEach(item => item.classList.replace("loading", "loading_invisible"))
        notFound.classList.replace("not-found_invisible", "not-found_visible")
      }
    }
  }
}

if (document.querySelector("html").getAttribute("name") === "index")
  searchAction.addEventListener('click', event => {
    event.preventDefault();
    event.stopImmediatePropagation();
    getNewsArticles(event)
  })

import "../pages/homepage.css"
import './components/grey'

import {
  headerWhite, mobileMenuButtons, exitLinks, categoryTitles, deleteAlerts,
  wasteButtons, resultsCards, homeTitle, homeKeysField
} from './constants/constants'
import { api } from './index'
import { getKeywords } from './utils/getKeywords'
import { clearResultsBlock } from './utils/clearResults'
import { Article } from './components/Article'
import { ArticleList } from './components/ArticleList'

const homepageLoaded = () => {
  if (localStorage.userName === undefined) window.open('../index.html', '_self')
  else {
    exitLinks.forEach(item => item.innerText = localStorage.userName)
    categoryTitles.forEach(item => {
      item.classList.replace("results__card-category", "results_card-category_invisible")
    })
    deleteAlerts.forEach(item => {
      item.classList.replace("results__card-delete", "results__card-delete_invisible")
    })
    wasteButtons.forEach(item => {
      item.classList.replace("results__waste", "results__waste_invisible")
    })
    getSavedArticles()
  }
}

if (document.querySelector("html").getAttribute("name") === "homepage")
  document.addEventListener('DOMContentLoaded', homepageLoaded)

mobileMenuButtons.forEach(item => {
  item.addEventListener('click', event => {
    if (event.target.parentNode.classList.contains("header-white")) {
      if (event.target.classList.contains("header__mobile-menu_black-stripes")) {
        event.target.classList.replace("header__mobile-menu_black-stripes", "header__mobile-menu_black-cross");
        headerWhite.classList.replace("header_mobile-short", "header_mobile-full-white")
        headerWhite.classList.add('header-white_with-bottom-radius')
        headerWhite.classList.replace('header-white_relative', 'header-white_absolute')
        grey.classList.replace('grey_invisible', 'grey_visible')
      }
      else {
        event.target.classList.replace("header__mobile-menu_black-cross", "header__mobile-menu_black-stripes");
        headerWhite.classList.replace("header_mobile-full-white", "header_mobile-short")
        headerWhite.classList.replace("header_unbordered", "header_bordered")
        headerWhite.classList.remove('header-white_with-bottom-radius')
        headerWhite.classList.replace('header-white_absolute', 'header-white_relative')
        grey.classList.replace('grey_visible', 'grey_invisible')
      }
    }

    })
})

export const savedCardsGenerate = () => {
  const articles = JSON.parse(localStorage.savedArticles)
  clearResultsBlock()
  if (articles.length === 0) return
  for (let item of articles)
  {
    const article = new Article(item, 0, item["_id"])
    const articleList = new ArticleList(resultsCards)
    articleList.addArticle(article)
    }
}

export const getSavedArticles = async () => {
    await api.getSavedArticles()
      .then((response) => {
        if (response === 'Ошибка: 404') {
          homeTitle.innerText = `${localStorage.userName}, у вас нет сохраненных статей`
          resultsCards.forEach(item => item.classList.add("results__cards_invisible"))
          homeKeysField.classList.replace("header-home__keys-field_visible", "header-home__keys-field_invisible")
          localStorage.setItem("savedArticles", [])
          return
        }
        else {
          localStorage.setItem("savedArticles", JSON.stringify(response.data));
          clearResultsBlock()
          if (response.data.length == 1) {
            homeTitle.innerText = `${localStorage.userName}, у вас 1 сохраненная статья`
          }
          if (response.data.length == 2) {
            homeTitle.innerText = `${localStorage.userName}, у вас 2 сохраненных статьи`
          }
          if (response.data.length > 2) {
            homeTitle.innerText = `${localStorage.userName}, у вас ${response.data.length} сохраненных статей`
          }
        }
      })
      .catch((err, result) => {
        if (err||result === [])
        return
      })
  if (localStorage.savedArticles) {
    getKeywords()
    savedCardsGenerate()
  }
}
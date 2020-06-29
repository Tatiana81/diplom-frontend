import "../pages/homepage.css"
import { api } from './index.js'
import { Article } from './components/Article'
import './components/grey'
import { headerWhite, mobileMenuButtons, exitLinks, categoryTitles, deleteAlerts, wasteButtons, homeTitle, resultsCards } from './constants/constants'


const getKeywords = () => {
  let keywords = {}
  let first = 0; let firstKeyword = "";
  let second = 0; let secondKeyword = "";
  let articles = JSON.parse(localStorage.savedArticles)

  for (let item of articles) {
    if (item.keyword in keywords) keywords[item.keyword] += 1
    else keywords[item.keyword] = 1
    if (keywords[item.keyword] > first) {
      first = keywords[item.keyword];
      firstKeyword = item.keyword
    }
    if ((keywords[item.keyword] < first) && (keywords[item.keyword]) > second) {
      second = keywords[item.keyword];
      secondKeyword = item.keyword
    }
  }
  let categories = getCategories(keywords)
  categories.length === 1 ? keys.innerText = `${categories[0][0]}`:
  categories.length === 2 ? keys.innerText = `${categories[0][0]}, ${categories[1][0]}`:
  keys.innerText = `${categories[0][0]}, ${categories[1][0]} и ${categories.length-2} другим`
}

const getCategories = (keywords) => {
  let sortedCategories = [];
  for (var cat in keywords) {
    sortedCategories.push([cat, keywords[cat]]);
  }
  sortedCategories.sort(function(a, b) {
    return b[1] - a[1];
  });
  return sortedCategories
}

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.userName === undefined) window.open('../index.html', '_self')
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
  getSavedArticles();
  })

const getSavedArticles = async () => {
  localStorage.removeItem('savedArticles')
  await api.getSavedArticles()
    .then(async (response) => {
      if (response === undefined) {
        homeTitle.innerText = `${localStorage.userName}, у вас нет сохраненных статей`
        resultsCards.forEach(item => item.classList.add("results__cards_invisible"))
        homeKeysField.classList.replace("header-home__keys-field_visible","header-home__keys-field_invisible")
        localStorage.setItem("savedArticles", [])
      }
      if (response.data.length == 1) {
        homeTitle.innerText = `${localStorage.userName}, у вас 1 сохраненная статья`
      }
      if (response.data.length == 2) {
        homeTitle.innerText = `${localStorage.userName}, у вас 2 сохраненных статьи`
      }
      if (response.data.length > 2) {
        homeTitle.innerText = `${localStorage.userName}, у вас ${response.data.length} сохраненных статей`
      }
      localStorage.setItem("savedArticles", JSON.stringify(response.data));
      getKeywords();
      cardsGenerate()
    })
    .catch((err) => {
      return err;
    })
}

let currentIndex = 0;

const cardsGenerate = (articles=JSON.parse(localStorage.savedArticles), index = currentIndex) => {
  do {
    let element = new Article(articles[index], 0, articles[index]["_id"]).create()
    resultsCards.forEach(item => { item.insertAdjacentHTML('beforeend', element) });
    addListeners();
    index++;
    }
  while (index !== articles.length);
  currentIndex = index;
}

const addListeners = () => {
  wasteButtons.forEach(item => {
    item.addEventListener('mouseover', event => {
      event.target.classList.replace("results__waste_white-waste","results__waste_black-waste")
      event.target.nextSibling.nextElementSibling.classList.replace("results__card-delete_invisible","results__card-delete")
    })
    item.addEventListener('mouseout', event => {
      event.target.classList.replace("results__waste_black-waste", "results__waste_white-waste")
    })
  })
  deleteAlerts.forEach(item => {
    item.addEventListener('click', async event => {
      event.preventDefault()
      event.stopImmediatePropagation();
      await api.deleteArticle(event)
      getSavedArticles();
      resultsCards.forEach(item => item.removeChild(event.target.parentNode))
    })
  })
}

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
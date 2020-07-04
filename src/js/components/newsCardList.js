import {
  resultsButton,resultsCards, numberOfCardsPerArray
} from '../constants/constants'

import { Article } from './Article'
import { ArticleList } from '../components/ArticleList'
import { transformDate } from '../utils/dateTransformer'

let currentIndex = 0

export const cardsGenerate = () => {
  const articles = JSON.parse(localStorage.articles)
  let index = currentIndex
  const newsArticleList = new ArticleList(resultsCards)
  do {
    if (index < articles.length) {
      const article = new Article(articles[index], transformDate(articles[index]))
      newsArticleList.addArticle(article)
      if (index == articles.length - 1)
        resultsButton.classList.add("results__button_hide")
      index++;
    }
    else return
  }
  while ((index % numberOfCardsPerArray) !== 0)
  currentIndex = index;
}

resultsButton.addEventListener('click', () => {
  cardsGenerate()
})

export const savedCardsGenerate = () => {
  const articles = JSON.parse(localStorage.savedArticles)
  clearResultsBlock()
  if (articles.length === 0) return
  for (let item of articles)
  {
    console.log("1", item)
    const article = new Article(item, 0, item["_id"])
    const articleList = new ArticleList(resultsCards)
    articleList.addArticle(article)
    }
}

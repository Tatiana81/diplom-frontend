import { keys } from '../constants/constants'
import { getCategories } from '../utils/getCategories'

export const getKeywords = () => {
  const keywords = {}
  let first = 0; let firstKeyword = "";
  let second = 0; let secondKeyword = "";
  const userArticles = JSON.parse(localStorage.savedArticles)
  if (userArticles.length === 0) return
  for (let item of userArticles) {
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
  const categories = getCategories(keywords)
  categories.length === 1 ? keys.innerText = `${categories[0][0]}`:
  categories.length === 2 ? keys.innerText = `${categories[0][0]}, ${categories[1][0]}`:
  keys.innerText = `${categories[0][0]}, ${categories[1][0]} и ${categories.length-2} другим`
}
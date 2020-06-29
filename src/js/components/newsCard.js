import { bookmarks } from '../constants/constants'
import { api } from '../index'

export const eventListeners = () => {
  bookmarks.forEach(item => {
    item.addEventListener('click', async event => {
      event.preventDefault()
      event.stopImmediatePropagation()
      if (localStorage.getItem('token')) {
        if (event.target.classList.contains("results__card-bookmark_blue-flag")) {
          api.deleteArticle(event)
          event.target.classList.replace("results__card-bookmark_blue-flag", "results__card-bookmark_white-flag")
        }
        else {
          event.target.classList.replace("results__card-bookmark_white-flag", "results__card-bookmark_blue-flag");
          const articleItem = await api.addArticle(event)
          event.target.parentNode.setAttribute("id",articleItem.data['_id'])
        }
      }
      else {
        event.target.nextElementSibling.classList.replace("results__card-author-expected_invisible", "results__card-author-expected_visible")
        setTimeout(() => {
          event.target.nextElementSibling.classList.replace("results__card-author-expected_visible", "results__card-author-expected_invisible")
        }, 2000)
      }
    })
      item.addEventListener('mouseover', event => {
        if (!localStorage.getItem('token')) {
          event.target.nextElementSibling.classList.replace("results__card-author-expected_invisible", "results__card-author-expected_visible")
          setTimeout(() => {
            event.target.nextElementSibling.classList.replace("results__card-author-expected_visible", "results__card-author-expected_invisible")
          }, 3000)
        }
      })
    })
}

import "../pages/index.css"
import { MainApi} from './api/MainApi'
import './components/header'
import './components/newsCard'
import './components/newsCardList'
import './components/popup'
import './components/grey'
import './utils/escapeListener'

import {
  mobileMenuButtons, headerBlack, authorSubmenus, savedSubmenus, exitSubmenus, mainLinks,
  exitLinks, headerWhite, savedLinks
} from './constants/constants'

export const options = {
  currentSearchInput: "",
  baseUrl: "https://api.tsnews.gq",
}

export const api = new MainApi(options.baseUrl,{
    authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json'
});

document.addEventListener("DOMContentLoaded", async () => {
  if (localStorage.token) {
    if (document.querySelector("html").getAttribute("name") === "index")
      headerBlack.classList.replace("header_logged-out", "header_logged-in")
    else headerWhite.classList.replace("header_logged-out", "header_logged-in")
    authorSubmenus.forEach(item => {
      item.classList.add("header__menu-subtitle_invisible")
    })
    savedSubmenus.forEach(item => {
      item.classList.remove("header__menu-subtitle_invisible")
    })
    exitSubmenus.forEach(item => {
      item.classList.remove("header__menu-subtitle_invisible")
    })
    mainLinks.forEach(item => {
      item.classList.replace('header__main-link_logged-out', 'header__main-link_logged-in')
    })
    mobileMenuButtons.forEach(item => {
      item.classList.replace("header__mobile-menu_white-cross", "header__mobile-menu_white-stripes")
    })
    exitLinks.forEach(item => item.innerText = localStorage.userName)
  }
})

mobileMenuButtons.forEach(item => {
  item.addEventListener('click', event => {
    if (event.target.parentNode.classList.contains("header-black")) {
      if (event.target.classList.contains("header__mobile-menu_white-stripes")) {
        event.target.classList.replace("header__mobile-menu_white-stripes", "header__mobile-menu_white-cross")
        headerBlack.classList.remove("header-black_bordered")
        headerBlack.classList.add("header-black_with-bottom-radius")
        grey.classList.replace("grey_invisible", "grey_visible")
        headerBlack.classList.replace("header_mobile-short", "header_mobile-full")
        savedLinks.forEach(item => { item.classList.replace("header__saved-link_passive", "header__saved-link_white") })
      }
      else {
        grey.classList.replace("grey_visible", "grey_invisible")
        event.target.classList.replace("header__mobile-menu_white-cross", "header__mobile-menu_white-stripes")
        headerBlack.classList.replace("header_mobile-full", "header_mobile-short")
        savedLinks.forEach(item => { item.classList.add("header__saved-link_passive") })
      }
    }
    })
})

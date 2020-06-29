export const loginPopup = document.getElementById("popup_login")
export const registrationPopup = document.getElementById("popup_registration")
export const home = document.getElementById("home")
export const search = document.getElementById("search")
export const resultsBlock = document.getElementById("results")
export const about = document.getElementById("about")
export const loading = document.getElementById("loading")
export const notFound = document.getElementById("not-found")
export const searchInput = document.getElementById("search_input")
export const resultsTitle = document.getElementById('results_title')
export const resultsButton = document.getElementById('results_button')
export const successReg = document.getElementById("popup_success_registration")
export const headerBlack = document.getElementById("header-black")
export const headerWhite = document.getElementById("header-white")
export const homeTitle = document.getElementById('home_title')
export const homeKeysField = document.getElementById("keys_field")
export const keys = document.getElementById('keys')
export const grey = document.getElementById("grey")

export const enterButtons = document.getElementsByName("enter_button")
export const regButton = document.getElementsByName("reg_button")
export const searchAction = document.getElementsByName("search_action")
export const enterAfterRegistration = document.getElementsByClassName('popup__success-link')

export const authorLinks = document.getElementsByClassName("header__author-link")
export const closeButtons = document.getElementsByClassName("popup__close-button")
export const exitLinks = document.getElementsByClassName("header__exit-link")
export const mainLinks = document.getElementsByClassName("header__main-link")
export const authorSubmenus = document.getElementsByClassName("header__menu-subtitle_author")
export const savedSubmenus = document.getElementsByClassName("header__menu-subtitle_saved")
export const exitSubmenus = document.getElementsByClassName("header__menu-subtitle_exit")
export const bookmarks = document.getElementsByName("bookmark")
export const alterLinks = document.getElementsByClassName("popup__alter-link")
export const existUserError = document.getElementsByClassName("popup__exist-user-error")


export const mobileMenuButtons = document.getElementsByName("mobile_menu_button")
//export const headerLine = document.querySelectorAll(".header__line")

export const savedLinks = document.getElementsByClassName("header__saved-link")
export const inputs = document.querySelectorAll('.popup__input')
export const cards = document.getElementsByClassName("results__cards")

export const popup_errors = document.getElementsByClassName("popup__error")
export const wasteButtons = document.getElementsByName("waste")
export const categoryTitles = document.getElementsByClassName("results_card-category__invisible")
export const deleteAlerts = document.getElementsByName("delete_alert")
export const resultsCards = document.getElementsByClassName("results__cards")


export let currentIndex = 0;
export const validState = {
  email: 0,
  password: 0,
  name: 0
}
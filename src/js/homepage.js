import "../vendor/normalize.css"
import "../pages/homepage.css"

const login_form_white = document.getElementById("header-white")
const exit_button_black = document.getElementsByClassName("header__exit-link")
const saved_articles_link = document.getElementsByClassName("header_saved-link")
const home = document.getElementById("home")
const search = document.getElementById("search")
const results = document.getElementById("results")
const about = document.getElementById("about")
const logged_in_main_link = document.getElementsByClassName("header_main-link")
const search_action = document.getElementsByName("search_action")
const results_title = document.getElementById('results_title')
const waste = document.getElementsByName("waste")
const category = document.getElementsByClassName("results_card-category__invisible")
const delete_alert = document.getElementsByName("delete_alert")
const mobile_menu_button = document.getElementsByName("mobile_menu_button")
const grey = document.getElementById("grey")
const header_line = document.querySelectorAll(".header_line")

saved_articles_link.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    logged_in_form_black.classList.replace("header-black-logged-in__visible", "header-black-logged-in__invisible")
    login_form_white.classList.replace("header-white__invisible", "header-white__visible")
    home.classList.replace("header-home__invisible", "header-home")
    search.classList.replace("header-search", "header-search__invisible")
    results.classList.replace("results__invisible", "results")
    about.classList.replace("about", "about__invisible")
    bookmarks.forEach(item => {
      item.classList.replace("results_card-bookmark", "results_card-bookmark__invisible")
    })
    waste.forEach(item => {
      item.classList.replace("results_waste__invisible", "results_waste")
    })
    category.forEach(item => {
      item.classList.replace("results_card-category__invisible", "results_card-category")
    })
    loading.classList.replace("loading", "loading__invisible")
    loading.children.forEach(item => item.classList.replace("loading", "loading__invisible"))
    not_found.classList.replace("not-found", "not-found__invisible")
    })
})

logged_in_main_link.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    event.stopImmediatePropagation();
    logged_in_form_black.classList.replace("header-black-logged-in__invisible", "header-black-logged-in")
    login_form_white.classList.replace("header-white", "header-white__invisible")
    home.classList.replace("header-home", "header-home__invisible")
    search.classList.replace("header-search__invisible", "header-search")
    results.classList.replace("results", "results__invisible")
    about.classList.replace("about__invisible","about")
  })
})

search_action.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    results.classList.replace("results", "results__invisible")
    if (not_found.classList.contains("not-found")) not_found.classList.replace("not-found", "not-found__invisible")
    bookmarks.forEach(item => {
      item.classList.replace("results_card-bookmark__invisible", "results_card-bookmark")
    })
    category.forEach(item => {
      item.classList.replace("results_card-category", "results_card-category__invisible")
    })
    delete_alert.forEach(item => {
      item.classList.replace("results_card-delete", "results_card-delete__invisible")
    })
    waste.forEach(item => {
      item.classList.replace("results_waste", "results_waste__invisible")
    })
    loading.classList.replace("loading__invisible", "loading")
    loading.children.forEach(item => item.classList.replace("loading__invisible", "loading"))
    setTimeout(() => {
    loading.classList.replace("loading", "loading__invisible")
    loading.children.forEach(item => item.classList.replace("loading", "loading__invisible"))
      if (search_input.value === 'статьи') {
        results.classList.replace("results__invisible", "results")
        results_title.classList.replace("results_title__invisible", "results_title")
        results_button.classList.replace("results_button__invisible","results_button")
      }
      else not_found.classList.replace("not-found__invisible", "not-found")
    }, 2000)
  })
})

waste.forEach(item => {
  item.addEventListener('mouseover', event => {
    event.target.classList.replace("results__waste_white-waste","results__waste_black-waste")
    event.target.nextSibling.nextElementSibling.classList.replace("results__card-delete_invisible","results__card-delete")
  })
  item.addEventListener('mouseout', event => {
    event.target.classList.replace("results__waste_black-waste","results__waste_white-waste")
  })
})

mobile_menu_button.forEach(item => {
  item.addEventListener('click', event => {
    if (event.target.classList.contains("header__mobile-menu_black-stripes")) {
      grey.classList.replace('grey_invisible','grey_visible')
      event.target.classList.replace("header__mobile-menu_black-stripes", "header__mobile-menu_black-cross");
      login_form_white.classList.replace("header_mobile-short", "header_mobile-full-white")
      login_form_white.classList.add('header-white_with-bottom-radius')
      login_form_white.classList.replace('header-white_relative','header-white_absolute')
    }
    else {
      grey.classList.replace('grey_visible','grey_invisible')
      event.target.classList.replace("header__mobile-menu_black-cross", "header__mobile-menu_black-stripes");
      login_form_white.classList.replace("header_mobile-full-white", "header_mobile-short")
      login_form_white.classList.replace("header_unbordered", "header_bordered")
      login_form_white.classList.remove('header-white_with-bottom-radius')
      login_form_white.classList.replace('header-white_absolute','header-white_relative')
    }
    })
})
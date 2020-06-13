import "index.css"
const author_link = document.getElementsByName("author-link")
const login_popup = document.getElementById("popup_login")
const registration_popup = document.getElementById("popup_registration")
const close_buttons = document.getElementsByClassName("popup_close-button")
const enter_button = document.getElementsByName("enter_button")
const reg_button = document.getElementsByName("reg_button")
const logged_in_form_black = document.getElementById("logged_in_form_black")
const logged_out_form_black = document.getElementById("logged_out_form_black")
const login_form_white = document.getElementById("login_form_white")
const exit_button_black = document.getElementsByClassName("header-black-logged-in_exit-link")
const saved_articles_link = document.getElementsByClassName("header_saved-link")
const home = document.getElementById("home")
const search = document.getElementById("search")
const results = document.getElementById("results")
const about = document.getElementById("about")
const logged_in_main_link = document.getElementsByClassName("header_main-link")
const search_action = document.getElementsByName("search_action")
const loading = document.getElementById("loading")
const not_found = document.getElementById("not-found")
const search_input = document.getElementById("search_input")
const results_title = document.getElementById('results_title')
const results_button = document.getElementById('results_button')
const bookmarks = document.getElementsByName("bookmark")
const waste = document.getElementsByName("waste")
const category = document.getElementsByClassName("results_card-category__invisible")
const alter_link = document.getElementsByName("alter_link")
const success_reg = document.getElementById("popup_success_registration")
const enter_after_registration = document.getElementsByClassName('popup_success-link')
const delete_alert = document.getElementsByName("delete_alert")
const mobile_menu_button = document.getElementsByName("mobile_menu_button")
const grey = document.getElementById("grey")
const header_line = document.querySelectorAll(".header_line")


author_link.forEach(item=> {
  item.addEventListener('click', function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    login_popup.classList.replace("popup_login__invisible", "popup_login");
    login_popup.classList.replace("popup__invisible", "popup");
    grey.classList.replace("grey__invisible","grey__visible")
  })
});

close_buttons.forEach(function (item) {
  item.addEventListener('click', function (event) {
    event.preventDefault();
    event.target.parentNode.classList.replace("popup", "popup__invisible")
    grey.classList.replace("grey__visible", "grey__invisible")
  })
});

enter_button.forEach(item => {
  item.addEventListener('click', event => {
    event.target.closest(".popup_login").classList.replace("popup", "popup__invisible")
    logged_out_form_black.classList.replace("header-black", "header-black__invisible");
    logged_in_form_black.classList.replace("header-black-logged-in__invisible", "header-black-logged-in__visible")
    saved_articles_link.forEach(item => { item.classList.add("header_saved-link__visible") })
    grey.classList.replace("grey__visible","grey__invisible")
  })
})

exit_button_black.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    event.stopImmediatePropagation();
    logged_out_form_black.classList.replace("header-black__invisible","header-black");
    logged_in_form_black.classList.replace("header-black-logged-in__visible","header-black-logged-in__invisible")
  })
})

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

bookmarks.forEach(item => {
  item.addEventListener('click', event => {
    if (event.target.classList.contains("results_card-bookmark__blue-flag")) {
      event.target.classList.replace("results_card-bookmark__blue-flag", "results_card-bookmark__white-flag")
    }
    else {
      if (logged_out_form_black.classList.contains("header-black")) {
        event.target.nextElementSibling.classList.replace("results_card-author-expected__invisible", "results_card-author-expected")
        setTimeout(() => {
          event.target.nextElementSibling.classList.replace("results_card-author-expected", "results_card-author-expected__invisible")
        }, 3000)
      }
        else event.target.classList.replace("results_card-bookmark__white-flag", "results_card-bookmark__blue-flag")
      }
  })
})

waste.forEach(item => {
  item.addEventListener('mouseover', event => {
    event.target.classList.replace("results_waste__white-waste","results_waste__black-waste")
    event.target.nextSibling.nextElementSibling.classList.replace("results_card-delete__invisible","results_card-delete")
  })
  item.addEventListener('mouseout', event => {
    event.target.classList.replace("results_waste__black-waste","results_waste__white-waste")
  })
})

alter_link.forEach(item => {
  item.addEventListener('click', event => {
    if (event.target.textContent === "Зарегистрироваться") {
      login_popup.classList.replace("popup_login", "popup_login__invisible")
      login_popup.classList.replace("popup", "popup__invisible")
      registration_popup.classList.replace("popup__invisible", "popup")
    }
    else {
      login_popup.classList.replace("popup_login__invisible", "popup_login")
      login_popup.classList.replace("popup__invisible", "popup")
      registration_popup.classList.replace("popup", "popup__invisible")
    }
  })
})

reg_button.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    registration_popup.classList.replace("popup", "popup__invisible")
    success_reg.classList.replace("popup__invisible", "popup")
  })
})

enter_after_registration.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    success_reg.classList.replace("popup", "popup__invisible")
    login_popup.classList.replace("popup_login__invisible", "popup_login")
    login_popup.classList.replace("popup__invisible", "popup")
  })
})

mobile_menu_button.forEach(item => {
  item.addEventListener('click', event => {
    if (event.target.classList.contains("header_mobile-menu__black-stripes")) {
      event.target.classList.replace("header_mobile-menu__black-stripes", "header_mobile-menu__black-cross");
      login_form_white.classList.replace("header-white__mobile-short", "header-white__mobile-full")
      login_form_white.classList.replace("header-white__bordered", "header-white__unbordered")
      header_line.forEach(item => { item.classList.remove("header_line__invisible")})
    }
    else {
      event.target.classList.replace("header_mobile-menu__black-cross", "header_mobile-menu__black-stripes");
      header_line.forEach(item => { item.classList.add("header_line__invisible")})
      login_form_white.classList.replace("header-white__mobile-full", "header-white__mobile-short")
      login_form_white.classList.replace("header-white__unbordered", "header-white__bordered")

    }
    if (event.target.classList.contains("header_mobile-menu__white-stripes")) {
      event.target.classList.replace("header_mobile-menu__white-stripes", "header_mobile-menu__white-cross")
      header_line.forEach(item => { item.classList.remove("header_line__invisible")})
      if (event.target.parentNode.classList.contains('header-black')) {
        logged_out_form_black.classList.replace("header-black__mobile-short", "header-black__mobile-full")

      }
      else {
        logged_in_form_black.classList.replace("header-black-logged-in__mobile-short", "header-black-logged-in__mobile-full")
        header_line.forEach(item => { item.classList.remove("header_line__invisible")})
        logged_in_main_link.forEach(item => {
          item.classList.replace("header_main-link__invisible", "header_main-link__visible")
        })
        saved_articles_link.forEach(item => {
          item.classList.replace("header_saved-link__invisible", "header_saved-link__visible")
          item.classList.remove("header_saved-link__passive")
        })
        exit_button_black.forEach(item => {
          item.classList.replace("header-black-logged-in_exit-link__invisible", "header-black-logged-in_exit-link__visible")
        })
    }
    }
    else {
      event.target.classList.replace("header_mobile-menu__white-cross", "header_mobile-menu__white-stripes")
      if (event.target.parentNode.classList.contains('header-black')) {
        logged_out_form_black.classList.replace("header-black__mobile-full", "header-black__mobile-short")

      }
      else {
        logged_in_form_black.classList.replace("header-black-logged-in__mobile-full", "header-black-logged-in__mobile-short")

    }
    }
    })
})
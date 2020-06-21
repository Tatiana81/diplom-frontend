import "../pages/index.css"

const author_link = document.getElementsByClassName("header__author-link")
const login_popup = document.getElementById("popup_login")
const registration_popup = document.getElementById("popup_registration")
const close_buttons = document.getElementsByClassName("popup__close-button")
const enter_button = document.getElementsByName("enter_button")
const reg_button = document.getElementsByName("reg_button")
const exit_button_black = document.getElementsByClassName("header__exit-link")
const home = document.getElementById("home")
const search = document.getElementById("search")
const results = document.getElementById("results")
const about = document.getElementById("about")
const logged_in_main_link = document.getElementsByClassName("header__main-link")
const search_action = document.getElementsByName("search_action")
const loading = document.getElementById("loading")
const not_found = document.getElementById("not-found")
const search_input = document.getElementById("search_input")
const results_title = document.getElementById('results_title')
const results_button = document.getElementById('results_button')
const bookmarks = document.getElementsByName("bookmark")
const waste = document.getElementsByName("waste")
const category = document.getElementsByClassName("results__card-category_invisible")
const alter_link = document.getElementsByClassName("popup__alter-link")
const success_reg = document.getElementById("popup_success_registration")
const enter_after_registration = document.getElementsByClassName('popup__success-link')
const delete_alert = document.getElementsByName("delete_alert")
const mobile_menu_button = document.getElementsByName("mobile_menu_button")
const grey = document.getElementById("grey")
const header_line = document.querySelectorAll(".header__line")
const author_submenu = document.getElementsByClassName("header__menu-subtitle_author")
const saved_submenu = document.getElementsByClassName("header__menu-subtitle_saved")
const exit_submenu = document.getElementsByClassName("header__menu-subtitle_exit")
const header_black = document.getElementById("header-black")
const main_link = document.getElementsByClassName("header__menu-subtitle_main")
const inputs = document.querySelectorAll('.popup__input')
const saved_link = document.getElementsByClassName("header__saved-link")

author_link.forEach(item => {
  item.addEventListener('click', event => {
    console.log(event)
    login_popup.classList.replace("popup__login_invisible", "popup__login_visible");
    login_popup.classList.replace("popup_invisible", "popup_visible");
    grey.classList.replace("grey_invisible", "grey_visible")
  })
})


close_buttons.forEach(item=> {
  item.addEventListener('click', function (event) {
    event.preventDefault();
    event.target.parentNode.classList.replace("popup_visible", "popup_invisible")

    grey.classList.replace("grey_visible", "grey_invisible")
  })
});

enter_button.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault()
    event.target.closest(".popup__login").classList.replace("popup_visible", "popup_invisible")
    author_submenu.forEach(item => {
      item.classList.add("header__menu-subtitle_invisible")
    })
    saved_submenu.forEach(item => {
      item.classList.remove("header__menu-subtitle_invisible")
    })
    exit_submenu.forEach(item => {
      item.classList.remove("header__menu-subtitle_invisible")
    })
    grey.classList.replace("grey_visible", "grey_invisible")
    header_black.classList.replace("header-black_logged-out", "header-black_logged-in")
    main_link.forEach(item => {
      item.classList.replace('header__main-link_logged-out', 'header__main-link_logged-in')
    })
    header_black.classList.replace("header_mobile-full", "header_mobile-short")
    mobile_menu_button.forEach(item => {
      item.classList.replace("header__mobile-menu_white-cross", "header__mobile-menu_white-stripes")
    })
  })
})

exit_button_black.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    author_submenu.forEach(item => {
      item.classList.remove("header__menu-subtitle_invisible")
    })
    saved_submenu.forEach(item => {
      item.classList.add("header__menu-subtitle_invisible")
    })
    exit_submenu.forEach(item => {
      item.classList.add("header__menu-subtitle_invisible")
    })
    header_black.classList.replace("header-black_logged-in", "header-black_logged-out")
    main_link.classList.replace('header__main-link_logged-in','header__main-link_logged-out')
  })
})

logged_in_main_link.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    logged_in_form_black.classList.replace("header-black-logged-in_invisible", "header-black-logged-in")
    login_form_white.classList.replace("header-white", "header-white_invisible")
    home.classList.replace("header-home", "header-home_invisible")
    search.classList.replace("header-search_invisible", "header-search")
    results.classList.replace("results", "results_invisible")
    about.classList.replace("about_invisible","about")
  })
})

search_action.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    results.classList.replace("results_visible", "results_invisible")
    if (not_found.classList.contains("not-found")) not_found.classList.replace("not-found", "not-found_invisible")
    bookmarks.forEach(item => {
      item.classList.replace("results__card-bookmark_invisible", "results__card-bookmark")
    })
    category.forEach(item => {
      item.classList.replace("results__card-category", "results_card-category_invisible")
    })
    delete_alert.forEach(item => {
      item.classList.replace("results__card-delete", "results__card-delete_invisible")
    })
    waste.forEach(item => {
      item.classList.replace("results__waste", "results__waste_invisible")
    })
    loading.classList.replace("loading_invisible", "loading")
    loading.children.forEach(item => item.classList.replace("loading_invisible", "loading"))
    setTimeout(() => {
    loading.classList.replace("loading", "loading_invisible")
    loading.children.forEach(item => item.classList.replace("loading", "loading_invisible"))
      if (search_input.value === 'статьи') {
        results.classList.replace("results_invisible", "results_visible")
        results_title.classList.replace("results__title_invisible", "results__title")
        results_button.classList.replace("results__button_invisible","results__button")
      }
      else not_found.classList.replace("not-found_invisible", "not-found")
    }, 2000)
  })
})

bookmarks.forEach(item => {
  item.addEventListener('click', event => {
    if (event.target.classList.contains("results__card-bookmark_blue-flag")) {
      event.target.classList.replace("results__card-bookmark_blue-flag", "results__card-bookmark_white-flag")
    }
    else {
      if (header_black.classList.contains("header-black_logged-out")) {
        event.target.nextElementSibling.classList.replace("results__card-author-expected_invisible", "results__card-author-expected_visible")
        setTimeout(() => {
          event.target.nextElementSibling.classList.replace("results__card-author-expected_visible", "results__card-author-expected_invisible")
        }, 3000)
      }
        else event.target.classList.replace("results__card-bookmark_white-flag", "results__card-bookmark_blue-flag")
      }
  })
})

waste.forEach(item => {
  item.addEventListener('mouseover', event => {
    console.log(event)
    event.preventDefault()
    event.target.classList.replace("results__waste_white-waste","results__waste_black-waste")
    event.target.nextSibling.nextElementSibling.classList.replace("results__card-delete_invisible","results__card-delete")
  })
  item.addEventListener('mouseout', event => {
    event.target.classList.replace("results__waste_black-waste","results__waste_white-waste")
  })
})

alter_link.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault()
    event.stopImmediatePropagation();
    if (event.target.textContent === "Зарегистрироваться") {
      login_popup.classList.replace("popup__login_visible", "popup__login_invisible")
      login_popup.classList.replace("popup_visible", "popup_invisible")
      registration_popup.classList.replace("popup_invisible", "popup_visible")
    }
    else {
      login_popup.classList.replace("popup__login_invisible", "popup__login_visible")
      login_popup.classList.replace("popup_invisible", "popup_visible")
      registration_popup.classList.replace("popup_visible", "popup_invisible")
    }
  })
})

reg_button.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    registration_popup.classList.replace("popup_visible", "popup_invisible")
    success_reg.classList.replace("popup_invisible", "popup_visible")
    grey.classList.replace("grey_visible","grey_invisible")
  })
})

enter_after_registration.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    success_reg.classList.replace("popup_visible", "popup_invisible")
    login_popup.classList.replace("popup__login_invisible", "popup__login")
    login_popup.classList.replace("popup_invisible", "popup_visible")
  })
})

mobile_menu_button.forEach(item => {
  item.addEventListener('click', event => {
    if (event.target.classList.contains("header__mobile-menu_white-stripes")) {
      event.target.classList.replace("header__mobile-menu_white-stripes", "header__mobile-menu_white-cross")
      header_black.classList.remove("header-black_bordered")
      header_black.classList.add("header-black_with-bottom-radius")
      grey.classList.replace("grey_invisible","grey_visible")
      header_black.classList.replace("header_mobile-short", "header_mobile-full")
      saved_link.forEach(item => { item.classList.replace("header__saved-link_passive", "header__saved-link_white") })
    }
    else {
      grey.classList.replace("grey_visible","grey_invisible")
      event.target.classList.replace("header__mobile-menu_white-cross", "header__mobile-menu_white-stripes")
      header_black.classList.replace("header_mobile-full", "header_mobile-short")
      saved_link.forEach(item=> {item.classList.add("header__saved-link_passive")})
      }
    })
})


inputs.forEach(item => {
  item.addEventListener('input', event => {
    event.preventDefault()
    event.stopImmediatePropagation();
    if ((event.target.validity.typeMismatch == true) && (event.target.getAttribute('type') === "email")) {
      event.target.nextElementSibling.classList.remove("popup__error_invisible")
      return
    }
    else {
      event.target.nextElementSibling.classList.add("popup__error_invisible")
    }
    if ((event.target.validity.tooShort) && (event.target.getAttribute('type') === "password")) {
      event.target.nextElementSibling.classList.remove("popup__error_invisible")
      return
    }
    else {
      event.target.nextElementSibling.classList.add("popup__error_invisible")
      if ((event.target.validity.tooShort || event.target.validity.tooLong) && event.target.getAttribute('type') === "text") {
        event.target.nextElementSibling.classList.remove("popup__error_invisible")
        return
      }
      else {
        event.target.nextElementSibling.classList.add("popup__error_invisible");
      }
    }
  })
})

// var url = 'http://newsapi.org/v2/everything?' +
//            'q=Apple&' +
//            'from=2020-06-19&' +
//            'sortBy=popularity&' +
//            'apiKey=eeff81fa19344fc1a70eb8d1678c573a';

// var req = new Request(url);

// fetch(req)
//      .then(response => {
//        console.log(response.json());
//      })
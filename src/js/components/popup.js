import {
  grey, loginPopup, registrationPopup, successReg, closeButtons, enterButtons,
  exitLinks, authorSubmenus, savedSubmenus, exitSubmenus, headerBlack, mobileMenuButtons,
  alterLinks, regButton, existUserError, enterAfterRegistration, inputs, mainLinks, validState
} from '../constants/constants'
import { api } from '../index'

closeButtons.forEach(item=> {
  item.addEventListener('click', event => {
    event.preventDefault();
    event.target.parentNode.classList.replace("popup_visible", "popup_invisible")
    grey.classList.replace("grey_visible", "grey_invisible")
  })
});

enterButtons.forEach(item => {
  item.addEventListener('click', async event => {
    event.preventDefault()
    if (localStorage.token) localStorage.removeItem('token')
    let result = await api.signin(
      loginPopup.elements.email.value,
      loginPopup.elements.password.value
    );
    localStorage.token = result
    let credentials = await api.getUserName()
    localStorage.userName = credentials.name
    exitLinks.forEach(item => item.innerText = localStorage.userName)
    if (result) {
      headerBlack.classList.replace("header_logged-out","header_logged-in")
      event.target.closest(".popup__login").classList.replace("popup_visible", "popup_invisible")
      authorSubmenus.forEach(item => {
        item.classList.add("header__menu-subtitle_invisible")
      })
      savedSubmenus.forEach(item => {
        item.classList.remove("header__menu-subtitle_invisible")
      })
      exitSubmenus.forEach(item => {
        item.classList.remove("header__menu-subtitle_invisible")
      })
      grey.classList.replace("grey_visible", "grey_invisible")
      mainLinks.forEach(item => {
        item.classList.replace('header__main-link_logged-out', 'header__main-link_logged-in')
      })
      headerBlack.classList.replace("header_mobile-full", "header_mobile-short")
      mobileMenuButtons.forEach(item => {
        item.classList.replace("header__mobile-menu_white-cross", "header__mobile-menu_white-stripes")
      })
    }
    })
})


alterLinks.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault()
    event.stopImmediatePropagation();
    if (event.target.textContent === "Зарегистрироваться") {
      loginPopup.classList.replace("popup__login_visible", "popup__login_invisible")
      loginPopup.classList.replace("popup_visible", "popup_invisible")
      registrationPopup.classList.replace("popup_invisible", "popup_visible")
    }
    else {
      loginPopup.classList.replace("popup__login_invisible", "popup__login_visible")
      loginPopup.classList.replace("popup_invisible", "popup_visible")
      registrationPopup.classList.replace("popup_visible", "popup_invisible")
    }
  })
})

regButton.forEach(item => {
  item.addEventListener('click', async event => {
    event.preventDefault();
    let result = await api.signup(
      registrationPopup.elements.email.value,
      registrationPopup.elements.password.value,
      registrationPopup.elements.name.value)
    if (result === undefined) {
      existUserError.forEach(item => {
        item.classList.remove("popup__exist-user-error_invisible")
      })
    }
    else {
      registrationPopup.classList.replace("popup_visible", "popup_invisible")
      successReg.classList.replace("popup_invisible", "popup_visible")
      grey.classList.replace("grey_visible", "grey_invisible")
    }
  })
})

enterAfterRegistration.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    successReg.classList.replace("popup_visible", "popup_invisible")
    loginPopup.classList.replace("popup__login_invisible", "popup__login")
    loginPopup.classList.replace("popup_invisible", "popup_visible")
  })
})

inputs.forEach(item => {
  item.addEventListener('input', event => {
    event.preventDefault()
    event.stopImmediatePropagation();
    if (event.target.getAttribute('type') === "email") {
      if (event.target.validity.patternMismatch == true) {
        validState.email = 0
        event.target.nextElementSibling.classList.remove("popup__error_invisible")
      }
      else {
        validState.email = 1
        event.target.nextElementSibling.classList.add("popup__error_invisible");
      }
      checkFormValidity(event);
    }
    if (event.target.getAttribute('type') === "password") {
      if (event.target.validity.tooShort == true) {
        validState.password = 0
        event.target.nextElementSibling.classList.remove("popup__error_invisible")
      }
      else {
        validState.password = 1
        event.target.nextElementSibling.classList.add("popup__error_invisible");
      }
      checkFormValidity(event);
    }
    if (event.target.getAttribute('type') === "text") {
      if (event.target.validity.patternMismatch == true) {
        validState.name = 0
        event.target.nextElementSibling.classList.remove("popup__error_invisible")
      }
      else {
        validState.name = 1
        event.target.nextElementSibling.classList.add("popup__error_invisible");
      }
      checkFormValidity(event);
    }
  })
})

function checkFormValidity() {
  if (event.target.parentNode.classList.contains("popup__login")) {
    if (validState.email && validState.password)
      enterButtons.forEach(item => item.disabled = false)
    else enterButtons.forEach(item => item.disabled = true)
  }
  else {
    if (validState.email && validState.password && validState.name)
      regButton.forEach(item => item.disabled = false)
    else regButton.forEach(item => item.disabled = true)
  }
}

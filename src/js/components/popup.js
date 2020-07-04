import {
  grey, loginPopup, registrationPopup, successReg, closeButtons, enterButtons,
  exitLinks, authorSubmenus, savedSubmenus, exitSubmenus, headerBlack, mobileMenuButtons,
  alterLinks, existUserError, enterAfterRegistration, inputs, mainLinks
} from '../constants/constants'
import { api } from '../index'
import { PopupValidator} from '../components/popupValidator'

const validator = new PopupValidator()

export class Popup {
    open(element) {
      element.classList.replace('popup_invisible', 'popup_visible');
      this._render()
    }
    close(element) {
        element.classList.replace('popup_visible', 'popup_invisible');
    }

    _render() {
      this._addCloseButtonsHandler()
      this._addEnterButtonsHandler()
      this._addAlterLinksHandler()
      this._addEnterAfterRegistrationHandler()
      this._addInputsValidatorHandler()
    }

  _addCloseButtonsHandler() {
    closeButtons.forEach(item => {
      item.addEventListener('click', event => {
        event.preventDefault();
        this.close(event.target.parentNode)
        grey.classList.replace("grey_visible", "grey_invisible")
      })
    })
  };

  _addEnterButtonsHandler() {
    enterButtons.forEach(item => {
      item.addEventListener('click', async event => {
        event.preventDefault();
        event.target.parentNode.querySelectorAll("input").disabled = true;
        item.disabled = true
        if (event.target.parentNode.classList.contains("popup__login")) {
          await api.signin(
            loginPopup.elements.email.value,
            loginPopup.elements.password.value
          )
            .then(async (result) => {
              if (result == "TypeError: Failed to fetch") {
                alert("Потеряно соединение с сервером. Попобруйте повторить попытку или обратитесь к провайдеру ");
                event.target.parentNode.querySelectorAll("input").disabled = false;
                item.disabled = false
                return
              }
              if (result == "Ошибка: 401") {
                alert("Пользователь с таким именем не зарегистрирован. Зарегистрируйте нового пользователя")
                return Promise.reject(`Ошибка: ${res.status}`);
              }
              if (result) {
                localStorage.token = result
                let credentials = await api.getUserName()
                localStorage.userName = credentials.name
                exitLinks.forEach(item => item.innerText = localStorage.userName)
                if (result) {
                  headerBlack.classList.replace("header_logged-out", "header_logged-in")
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
              }
            })
          .catch(err => {
              console.log("Error: ", err)
            })
        }
        else {
          await api.signup(
            registrationPopup.elements.email.value,
            registrationPopup.elements.password.value,
            registrationPopup.elements.name.value)
            .then((result) => {
              if (result == "Ошибка: 409") {
                existUserError.classList.remove("popup__exist-user-error_invisible")
              }
              if (result == "TypeError: Failed to fetch") {
                alert("Потеряно соединение с сервером. Попобруйте повторить попытку или обратитесь к провайдеру ");
                return
              }
              if (result.data) {
                registrationPopup.classList.replace("popup_visible", "popup_invisible")
                successReg.classList.replace("popup_invisible", "popup_visible")
                grey.classList.replace("grey_visible", "grey_invisible")
              }
              return result
            })
            .catch(err => {
              console.log("Error: ", err)
            })
        }
      })
    })
  }

  _alterLinksEvent(event) {
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
      }

  _addAlterLinksHandler() {
    alterLinks.forEach(item => {
      item.addEventListener('click', event => { this._alterLinksEvent(event) })
    })
  }

  _addEnterAfterRegistrationHandler() {
    enterAfterRegistration.addEventListener('click', event => {
      event.preventDefault();
      successReg.classList.replace("popup_visible", "popup_invisible")
      loginPopup.classList.replace("popup__login_invisible", "popup__login")
      loginPopup.classList.replace("popup_invisible", "popup_visible")
    })
  }

  _addInputsValidatorHandler() {
    inputs.forEach(item => {
      item.addEventListener('input', event=>validator.validateField(event, event.target))
    })
  }
}
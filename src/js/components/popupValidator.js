import { validState, enterButtons } from '../constants/constants'

export class PopupValidator {
  validateField(event, element) {
    event.preventDefault()
    event.stopImmediatePropagation();
    if (element.getAttribute('type') === "email") {
      if (element.validity.patternMismatch == true) {
        validState.email = 0
        element.nextElementSibling.classList.remove("popup__error_invisible")
      }
      else {
        validState.email = 1
        element.nextElementSibling.classList.add("popup__error_invisible");
      }
      this._checkPopupValidity(element);
    }
    if (element.getAttribute('type') === "password") {
      if (element.validity.tooShort == true) {
        validState.password = 0
        element.nextElementSibling.classList.remove("popup__error_invisible")
      }
      else {
        validState.password = 1
        element.nextElementSibling.classList.add("popup__error_invisible");
      }
      this._checkPopupValidity(element);
    }
    if (element.getAttribute('type') === "text") {
      if (element.validity.patternMismatch == true) {
        validState.name = 0
        element.nextElementSibling.classList.remove("popup__error_invisible")
      }
      else {
        validState.name = 1
        element.nextElementSibling.classList.add("popup__error_invisible");
          }
          this._checkPopupValidity(element);
        }
  }

  _checkPopupValidity(element) {
    if (element.parentNode.classList.contains("popup__login")) {
      if (validState.email && validState.password)
        enterButtons.forEach(item => item.disabled = false)
      else enterButtons.forEach(item => item.disabled = true)
    }
    else {
      if (validState.email && validState.password && validState.name)
        enterButtons.forEach(item => item.disabled = false)
      else enterButtons.forEach(item => item.disabled = true)
    }
  }
}
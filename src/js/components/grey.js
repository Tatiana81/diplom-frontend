import {
  grey, loginPopup, registrationPopup, headerBlack,
  headerWhite, mobileMenuButtons, savedLinks
} from '../constants/constants'

grey.addEventListener('click', event => {
  grey.classList.replace("grey_visible", "grey_invisible")
  if (event.target.parentNode.parentNode.getAttribute("name") === "index") {
       if (loginPopup.classList.contains("popup_visible")) {
    loginPopup.classList.replace("popup_visible", "popup_invisible")
  }
  if (registrationPopup.classList.contains("popup_visible"))
    registrationPopup.classList.replace("popup_visible", "popup_invisible")
    mobileMenuButtons.forEach(item=>item.classList.replace("header__mobile-menu_white-cross", "header__mobile-menu_white-stripes"))
    headerBlack.classList.replace("header_mobile-full", "header_mobile-short")
    savedLinks.forEach(item => { item.classList.add("header__saved-link_passive") })
  }
  if (event.target.parentNode.parentNode.getAttribute("name") === "homepage") {
    mobileMenuButtons.forEach(item=>item.classList.replace("header__mobile-menu_black-cross", "header__mobile-menu_black-stripes"))
    headerWhite.classList.replace("header_mobile-full-white", "header_mobile-short")
    headerWhite.classList.replace("header_unbordered", "header_bordered")
    headerWhite.classList.remove('header-white_with-bottom-radius')
    headerWhite.classList.replace('header-white_absolute', 'header-white_relative')
  }
})
import { authorLinks, exitLinks, mainLinks, loginPopup, grey, savedSubmenus, exitSubmenus, resultsBlock } from '../constants/constants.js'
import { setEscapeListener} from '../utils/escapeListener'

authorLinks.forEach(item => {
  item.addEventListener('click', event => {
    loginPopup.classList.replace("popup__login_invisible", "popup__login_visible");
    loginPopup.classList.replace("popup_invisible", "popup_visible");
    grey.classList.replace("grey_invisible", "grey_visible")
    setEscapeListener();
  })
})

exitLinks.forEach(item => {
  item.addEventListener('click', () => {
    localStorage.removeItem('token')
    localStorage.removeItem('savedArticles')
    localStorage.removeItem('userName')
    authorSubmenu.forEach(item => {
      item.classList.replace("header__menu-subtitle_invisible","header__menu-subtitle_visible")
    })
    savedSubmenus.forEach(item => {
      item.classList.replace("header__menu-subtitle_visible","header__menu-subtitle_invisible")
    })
    exitSubmenus.forEach(item => {
      item.classList.replace("header__menu-subtitle_visible","header__menu-subtitle_invisible")
    })
})
})

mainLinks.forEach(item => {
  item.addEventListener('click', event => {
    resultsBlock.classList.replace("results", "results_invisible")
    about.classList.replace("about_invisible","about")
  })
})
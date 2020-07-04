import { resultsCards} from '../constants/constants'

export const clearResultsBlock = () => {
  resultsCards.forEach(item => {
  while (item.firstChild) {
    item.removeChild(item.lastChild)
    }
  })
}
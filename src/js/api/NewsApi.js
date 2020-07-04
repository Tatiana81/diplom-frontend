import { numberOfDaysAgo } from '../constants/constants'

export class NewsApi {
  constructor(apiKey, searchInput) {
    this.apiKey = apiKey;
    this.searchInput = searchInput
  }

  _dateFromCalculate(numberOfDaysAgo) {
    const now = new Date()
    let from = new Date()
    from.setDate(now.getDate() - numberOfDaysAgo)
    const month = ((from.getMonth() + 1) < 10) ? '0' + (from.getMonth() + 1) : from.getMonth() + 1;
    const day = (from.getDate() < 10) ? '0' + (from.getDate()) : from.getDate();
    from = from.getFullYear() + '-' + month + '-' + day;
    return from
  }

  async getNewsArticles() {
    return await fetch(new Request('https://praktikum.tk/news/v2/everything?' +
      `q=${this.searchInput}&` +
      `from=${this._dateFromCalculate(numberOfDaysAgo)}&` +
      'sortBy=popularity&' +
      'pageSize=100&' +
      `apiKey=${this.apiKey}`))
      .then((res) => {
        if (res.ok) return res.json()
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(result => { return result } )
      .catch(err => { return err })
  }
}
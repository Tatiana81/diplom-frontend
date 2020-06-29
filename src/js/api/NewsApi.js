export class NewsApi {
  constructor(apiKey, searchInput) {
    this.apiKey = apiKey;
    this.searchInput = searchInput
  }

  _dateFromCalculate() {
    let now = new Date()
    let from = new Date()
    from.setDate(now.getDate() - 7)
    let month = ((from.getMonth() + 1) < 10) ? '0' + (from.getMonth() + 1) : from.getMonth() + 1;
    let day = (from.getDate() < 10) ? '0' + (from.getDate()) : from.getDate();
    from = from.getFullYear() + '-' + month + '-' + day;
    return from
  }

  async getNewsArticles() {
    return await fetch(new Request('https://praktikum.tk/news/v2/everything?' +
      `q=${this.searchInput}&` +
      `from=${this._dateFromCalculate()}&` +
      'sortBy=popularity&' +
      'pageSize=100&' +
      `apiKey=${this.apiKey}`))
      .then(async (res) => { if (res.ok) return await res.json() })
      .then(async result => { return await result } )
      .catch(err => { return [] })
  }
}
export class ArticleList {
  constructor(element) {
    this.element = element;
  }

  addArticle(article) {
    this.element.forEach(item => {
      item.insertAdjacentHTML('beforeend', article.create())
    });
    this.render(article)
  }

  removeArticle(event) {
    this.element.removeChild(event.target.parentNode)
  }

  render(article) {
    this.element.forEach(item => item.addEventListener("click", event => {
      if (event.target.classList.contains('results__card-bookmark')) article.bookmarkArticle(event)
      else if (event.target.classList.contains('results__card-delete')) article.deleteArticle(event)
    }));
    this.element.forEach(item=>item.addEventListener("mouseover", event => {
      if (event.target.classList.contains('results__waste')) article.wasteOnHandler(event)
      if (event.target.classList.contains("results__card-bookmark")) article.bookmarkMouseOn(event)
    }))
    this.element.forEach(item=>item.addEventListener("mouseout", event => {
      if (event.target.classList.contains('results__waste')) article.wasteOutHandler(event)
    }))
  }
}
export class Article {
  constructor(article, fulldate, id) {
    this.article = article;
    this.fulldate = fulldate
    this.id = id
  }

  create() {
    if (this.id) {
      return `<a class="results__card" href="${this.article.link}" id="${this.id}" target="_blank">
            <img src="${this.article.image}" alt="picture" class="results__card-image">
            <button class="results__waste results__waste_white-waste" name="waste"></button>
            <button class="results__card-delete results__card-delete_invisible" name="delete_alert">Убрать из сохраненных</button>
            <p class="results__card-category">${this.article.keyword}</p>
            <p class="results__card-date">${this.article.date}</p>
            <p class="results__card-title">${this.article.title}</p>
            <div class="results__card-preread">${this.article.text}</div>
            <p class="results__card-source">${this.article.source}</p>
          </a>`;
    }
    else {
      return `<a class="results__card" href="${this.article.url}" target="_blank">
            <img src="${this.article.urlToImage}" alt="picture" class="results__card-image">
            <button class="results__card-bookmark results__card-bookmark_white-flag" name="bookmark"></button>
            <p class="results__card-author-expected results__card-author-expected_invisible">Войдите, чтобы сохранять статьи</p>
            <p class="results__card-date">${this.fulldate}</p>
            <p class="results__card-title">${this.article.title}</p>
            <div class="results__card-preread">${this.article.description}</div>
            <p class="results__card-source">${this.article.source.name}</p>
          </a>`;
    }
  }
}
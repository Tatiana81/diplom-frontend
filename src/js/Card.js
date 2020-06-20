export class Card {
    constructor(urlToImage, category, date, title, description, source, element) {
        this.urlToImage = urlToImage;
        this.category = category;
        this.date = date;
        this.title = title;
        this.description = description;
        this.source = source;
      this.element = element;
    }

    async like(event) {
        event.stopImmediatePropagation();
        let likeIcon = event.target.closest('.place-card__like-icon');
        if (likeIcon.classList.contains('place-card__like-icon_liked')) {
            let result = await this.api.deleteLike(event);
            event.target.parentNode.querySelector('p').textContent = result['likes'].length
            likeIcon.classList.remove('place-card__like-icon_liked');
        } else {
            let result = await this.api.addLike(event);
            event.target.parentNode.querySelector('p').textContent = result['likes'].length
            likeIcon.classList.add('place-card__like-icon_liked');
        }
    }
    remove(event) {
        event.stopImmediatePropagation();
        if (confirm("Вы действительно хотите удалить эту карточку?")) {
            this.element.removeChild(event.target.parentNode.parentNode);
            this.api.removeCard(event);
        }
    }

    create(card) {
            return `<div class="results__card">
              <img src="${this.urlToImage}" alt="picture" class="results__card-image">
              <button class="results__card-bookmark results__card-bookmark_invisible results__card-bookmark_white-flag" name="bookmark"></button>
              <p class="results__card-author-expected results__card-author-expected_invisible">Войдите, чтобы сохранять статьи</p>
              <button class="results__waste results__waste_white-waste" name="waste"></button>
              <button class="results__card-delete results__card-delete_invisible" name="delete_alert">Убрать из сохраненных</button>
              <p class="results__card-category results__card-category_invisible">${this.category}</p>
              <p class="results__card-date">${this.date}</p>
              <p class="results__card-title">${this.title}</p>
              <p class="results__card-preread">${this.description}</p>
              <p class="results__card-source">${this.source}</p>
          </div>`;
    }
}
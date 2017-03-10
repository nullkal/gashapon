import 'babel-polyfill';

let card = null;

async function generateCard() {
  let elem = document.getElementById('inner-frame');

  if (card) {
    elem.removeChild(card);
  }

  let response = await fetch('/cards/random.json');
  let json = await response.json();

  let flipCard = e => {
    let registerReset = e => {
      card.addEventListener('click', e => generateCard(), false);
    };
    card.classList.add('card__opened');
    card.removeEventListener('click', flipCard, false);
    card.addEventListener('transitionend', registerReset, false);
  };

  card = document.createElement('div');
  card.classList.add('card');
  card.addEventListener('click', flipCard, false);

  let cardInner = document.createElement('div');
  cardInner.classList.add('card__inner');
  card.appendChild(cardInner);

  let cardFront = document.createElement('div');
  cardFront.classList.add('card__front');
  cardInner.appendChild(cardFront);

  let cardContent = document.createElement('div');
  cardContent.classList.add('card__content');
  cardContent.appendChild(document.createTextNode(json.name));
  cardFront.appendChild(cardContent);

  let cardBack = document.createElement('div');
  cardBack.classList.add('card__back');
  cardInner.appendChild(cardBack);

  elem.appendChild(card);
}

document.addEventListener('DOMContentLoaded', e => {
  generateCard();
});

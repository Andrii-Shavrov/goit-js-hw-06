const refs = {
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  counterValue: document.querySelector('#value'),
}

let value = 0
const chageValue = (step) => {
  value = value + step
  refs.counterValue.textContent = value
}

refs.decrementBtn.addEventListener('click', () => chageValue(-1))
refs.incrementBtn.addEventListener('click', () => chageValue(1))

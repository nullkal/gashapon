import 'babel-polyfill';

import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Card from 'gashapon/components/Card'

async function generateRandomCard() {
  let response = await fetch('/cards/random.json');
  let json = await response.json();
}

document.addEventListener('DOMContentLoaded', e => {
  for (let i = 0; i < 5; ++i) {
    generateRandomCard();
  }
});

function reducer(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const store = createStore(reducer);

render(
  <Provider store={store}>
    <Card position={{x: 10, y: 10}} opened={false} onClick={() => {}}>a</Card>
  </Provider>,
  document.getElementById('root')
);


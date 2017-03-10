import * as React from 'react';

const CardList = ({ cards, onCardClick }) => (
  <div>
    {cards.map(card => {
      <Card position={{x: }}>{card.content}</Card>
    })}
  </div>
);

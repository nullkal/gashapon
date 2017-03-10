import * as React from 'react';

const Card = ({ children, onClick, opened, position }) => {
  let cardClasses = [ "card" ];
  if (opened) {
    cardClasses.push("card__opened");
  }

  let cardStyle = {
    top: `${position.y}px`,
    left: `${position.x}px`,
  };

  return (
    <div className={cardClasses.join(" ")} style={cardStyle}>
      <div className="card__inner">
        <div className="card__front">
          <div className="card__content">{children}</div>
        </div>
        <div className="card__back"></div>
      </div>
    </div>
  );
};

Card.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  opened: React.PropTypes.bool.isRequired,
  position: React.PropTypes.shape({
    x: React.PropTypes.number,
    y: React.PropTypes.number }).isRequired
};

export default Card;

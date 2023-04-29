import PropTypes from 'prop-types';
import React from 'react';

const Card = ({children, className}) => <div className={`${className}`}>{children}</div>;

export default Card;

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Card.defaultProps = {
  children: null,
  className: '',
};

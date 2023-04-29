import PropTypes from 'prop-types';
import React from 'react';

const Button = ({type, onClick, children}) => (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type || 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  );

export default Button;

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  onClick: () => { },
};

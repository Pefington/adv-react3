import PropTypes from 'prop-types';
import React from 'react';

import Button from './Button';
import Card from './Card';

const ErrorModal = ({ onConfirm, title, message }) => (
    <div>
    <div onClick={onConfirm}
    aria-hidden="true"
    />
      <Card>
        <header>
          <h2>{title}</h2>
        </header>
        <div>
          <p>{message}</p>
        </div>
        <footer>
          <Button onClick={onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );

export default ErrorModal;

ErrorModal.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import '../CSS/ErrorLabel.scss';
import { Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

function ErrorLabel({ message, tip }) {
  return (
    <Alert variant="warning" className="error-box">
      {message}
      ,
      &nbsp;
      {tip}
    </Alert>
  );
}

ErrorLabel.propTypes = {
  message: PropTypes.string,
  tip: PropTypes.string,
};


ErrorLabel.defaultProps = {
  message: 'Hi, ',
  tip: 'Try refreshing the page.',
};

export default ErrorLabel;

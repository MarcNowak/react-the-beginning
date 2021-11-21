import React from 'react';
import styles from './Container.scss';
import PropTypes from 'prop-types';

const Container = props => ( // eslint-disable-line no-unused-vars
  <div className={styles.component}></div>
);

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
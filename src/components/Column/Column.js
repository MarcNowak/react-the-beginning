import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss'

class Column extends React.Component {
  static propTypes = {
    columnTitle: PropTypes.node.isRequired,
  }

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{1}</h3>
        <h3 className={styles.title}>{2}</h3>
      </section>
    );
  }
}

export default Column;
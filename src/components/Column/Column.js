import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss'

class Column extends React.Component {
  static propTypes = {
    titleColumn: PropTypes.node.isRequired,
  }

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{props.titleColumn}</h3>
      </section>
    );
  }
}

export default Column;
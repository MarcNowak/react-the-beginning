import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';

class List extends React.Component {
  render() {
    return (
      <section className={styles.component}>
        {/* <h1 className={styles.title}>My first React List</h1> */}
        {/* <h2 className={styles.subtitle}>Things to do</h2> */}
        <Hero />
      </section>
    )
  }
}

export default List;

import React from 'react';
import styles from './ContactItem.module.css';

const ContactItem = ({ contact }) => {
  const { name, number } = contact;

  return (
    <li className={styles.item}>
      {name}: {number}
    </li>
  );
};

export default ContactItem;

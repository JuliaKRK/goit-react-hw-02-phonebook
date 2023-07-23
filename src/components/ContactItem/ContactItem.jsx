import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';

class ContactItem extends Component {
  render() {
    const { contact, onDelete } = this.props;
    const { id, name, number } = contact;

    return (
      <li className={styles.item}>
        <p>
          {name}: {number}
        </p>
        <button type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </li>
    );
  }
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;

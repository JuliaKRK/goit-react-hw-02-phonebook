import React, { Component } from 'react';
import ContactList from '../ContactList/ContactList';

class FilterContacts extends Component {
  state = {
    filter: '',
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  getFilteredContacts = () => {
    const { contacts } = this.props;
    const { filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <div>
        <p>Find contact by name</p>
        <input
          type="text"
          value={this.state.filter}
          onChange={this.handleFilterChange}
          placeholder="Find contact by name"
        />
        <ContactList contacts={filteredContacts} />
      </div>
    );
  }
}

export default FilterContacts;

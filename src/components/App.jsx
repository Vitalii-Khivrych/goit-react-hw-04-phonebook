import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import initialContacts from './data/cantacts.json';

const LOCAL_STORAGE_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  componentDidMount() {
    const contactsLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
    const parseContactsLocalStorage = JSON.parse(contactsLocalStorage);

    if (parseContactsLocalStorage) {
      this.setState({ contacts: parseContactsLocalStorage });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;

    if (prevState.contacts !== contacts) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const isFindCopyContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isFindCopyContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = { id: nanoid(), name, number };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };

  onChangeFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  renderForFilter() {
    const { contacts, filter } = this.state;
    const filterContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
    return filterContacts;
  }

  render() {
    const { filter, contacts } = this.state;
    const filterArray = this.renderForFilter();

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        {contacts.length > 0 && <h2>Contacts</h2>}
        {contacts.length > 1 && (
          <Filter value={filter} onChange={this.onChangeFilter} />
        )}
        <ContactList data={filterArray} onDeleteContact={this.deleteContact} />
      </>
    );
  }
}

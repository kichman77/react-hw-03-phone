import React, { Component } from 'react';
import Form from '../Form/Form';
import ContactList from '../ContactList/ContactList';
import { v4 as uuidv4 } from 'uuid';
import Filter from '../Filter/Filter';

class PhoneBook extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  componentDidMount() {
    // console.log('PhoneBook componentDidMount');

    const persistedItem = localStorage.getItem('contacts');

    if (persistedItem) {
      this.setState({
        contacts: JSON.parse(persistedItem),
      });
    }
    console.log(localStorage.getItem('contacts'));
  }

  componentDidUpdate(prevState) {
    // console.log('PhoneBook componentDidUpdate');

    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = contact => {
    this.state.contacts.some(item => item.name === contact.name)
      ? alert('This contact in base')
      : this.setState(prev => ({
          contacts: [...prev.contacts, { ...contact, id: uuidv4() }],
        }));
  };

  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  filterContact = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
  };

  onHandleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    //  console.log(this.props);
    return (
      <>
        <h1 className="title">PhoneBook</h1>
        <Form addContact={this.addContact} />
        <h2 className="subtitle">Contacts</h2>
        <Filter
          filter={this.state.filter}
          onHandleChange={this.onHandleChange}
        />

        <ContactList
          contacts={
            this.state.filter ? this.filterContact() : this.state.contacts
          }
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default PhoneBook;

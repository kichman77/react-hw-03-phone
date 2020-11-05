import React from 'react';
import './ContactList.css';
import PropTypes from 'prop-types';
const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className="contactList">
      {contacts.map(contact => (
        <li className="contactItem" key={contact.id}>
          <p className="text">{contact.name}</p>
          <p className="text">{contact.number}</p>
          <button
            className="btn-del"
            onClick={() => deleteContact(contact.id)}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired
};

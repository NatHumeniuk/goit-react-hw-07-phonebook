import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { removeContact } from 'store/contacts/contactsSlice';

import css from '../ContactItem/ContactItem.module.css';

export const ContactItem = () => {
  const contacts = useSelector(store => store.contactsScope.contacts);
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(removeContact(contactId));
  };
  const filter = useSelector(store => store.contactsScope.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.trim().toLowerCase())
  );

  return (
    <>
      {filteredContacts?.map(contact => (
        <li key={contact.id} className={css.contactField}>
          <p className={css.contact}>
            {contact.name}:&nbsp;
            <span className={css.phoneNumber}>{contact.number}</span>
            <button
              className={css.addContactBtn}
              onClick={() => handleDeleteContact(contact.id)}
            >
              Delete
            </button>
          </p>
        </li>
      ))}
    </>
  );
};

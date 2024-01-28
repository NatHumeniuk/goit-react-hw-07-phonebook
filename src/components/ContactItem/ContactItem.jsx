import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from '../ContactItem/ContactItem.module.css';
import { deleteContact } from 'store/operations';
import { selectVisibleContacts } from 'store/selectors';

export const ContactItem = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      {contacts?.map(contact => (
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

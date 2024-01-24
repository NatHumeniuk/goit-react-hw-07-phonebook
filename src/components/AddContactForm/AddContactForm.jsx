import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { customAlphabet } from 'nanoid';

import { addContact } from 'store/contacts/contactsSlice';
import css from '../AddContactForm/AddContactForm.module.css';

const nanoid = customAlphabet('1234567890abcdef', 4);

export const AddContactForm = () => {
  const contacts = useSelector(store => store.contactsScope.contacts);
  const dispatch = useDispatch();

  const handleFormSubmit = event => {
    event.preventDefault();

    const contactName = event.target.elements.contactName.value;
    const phoneNumber = event.target.elements.phoneNumber.value;

    const hasDuplicates = contacts.some(
      contact => contact.name.toLowerCase() === contactName.toLowerCase()
    );

    if (hasDuplicates) {
      alert(`${contactName} is already in contacts!`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: contactName,
      number: phoneNumber,
    };

    const action = addContact(newContact);
    dispatch(action);

    event.target.reset();
  };

  return (
    <form onSubmit={handleFormSubmit} className={css.formContact}>
      <label className={css.formLabel}>
        <span className={css.inputTitle}>Name:</span>
        <input
          className={css.formInput}
          type="text"
          placeholder="John Smith"
          name="contactName"
          required
        />
      </label>
      <label className={css.formLabel}>
        <span className={css.inputTitle}>Number:</span>
        <input
          className={css.formInput}
          type="tel"
          name="phoneNumber"
          placeholder="548-48-48"
          pattern="\d{3}-\d{2}-\d{2}"
          required
        />
      </label>

      <button type="submit" className={css.submitBtn}>
        Add contact
      </button>
    </form>
  );
};

import React from 'react';
import { useDispatch } from 'react-redux';

import css from '../AddContactForm/AddContactForm.module.css';
import { addContact } from 'store/operations';

export const AddContactForm = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = event => {
    event.preventDefault();

    const contactName = event.target.elements.contactName.value;
    const phoneNumber = event.target.elements.phoneNumber.value;

    const contactData = {
      name: contactName,
      phone: phoneNumber,
    };

    dispatch(addContact(contactData));
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

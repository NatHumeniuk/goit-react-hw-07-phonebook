import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import css from '../AddContactForm/AddContactForm.module.css';
import { addContact } from 'store/operations';
import { selectContacts } from 'store/selectors';

export const AddContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [isAdding, setIsAdding] = useState(false);

  const handleFormSubmit = event => {
    event.preventDefault();
    setIsAdding(true);
    const contactName = event.target.elements.contactName.value;
    const phoneNumber = event.target.elements.phoneNumber.value;

    const contactData = {
      name: contactName,
      phone: phoneNumber,
    };

    const checkDuplicate = contactName => {
      return contacts.some(contact => contact.name === contactName);
    };
    if (!checkDuplicate(contactData.name)) {
      dispatch(addContact(contactData));
      setIsAdding(false);
      event.target.reset();
    } else {
      toast(`${contactData.name} is already in contacts!`);
      setIsAdding(false);
    }
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

      <button type="submit" className={css.submitBtn} disabled={isAdding}>
        {isAdding ? 'Adding...' : 'Add Contact'}
      </button>
    </form>
  );
};

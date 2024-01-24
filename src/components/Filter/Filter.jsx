import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from 'store/contacts/contactsSlice';

import css from '../Filter/Filter.module.css';

export const Filter = () => {
  const filter = useSelector(store => store.contactsScope.filter);
  const dispatch = useDispatch();

  const handleChangeFilter = event => {
    const value = event.target.value;
    const action = setFilter(value);
    dispatch(action);
  };

  return (
    <>
      <p className={css.filterTitle}>Find contacts by name:</p>
      <label className={css.label}>
        <input
          className={css.filterInput}
          value={filter}
          onChange={handleChangeFilter}
          type="text"
          name="keyword"
          placeholder="John..."
        />
      </label>
    </>
  );
};

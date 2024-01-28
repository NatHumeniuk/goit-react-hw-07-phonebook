import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'store/selectors';

import { AddContactForm, ContactList, Filter } from 'components';
import css from './App.module.css';
import { fetchContacts } from 'store/operations';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className={css.mainTitle}>Phonebook</h1>
      <AddContactForm />
      {isLoading && !error && <p>Request in progress...</p>}
      <h2 className={css.contactsTitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

import { AddContactForm, ContactList, Filter } from 'components';

import css from './App.module.css';

export const App = () => {
  return (
    <div>
      <h1 className={css.mainTitle}>Phonebook</h1>
      <AddContactForm />
      <h2 className={css.contactsTitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

import { ContactForm } from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import s from './App.module.css';

function App() {
  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export { App };

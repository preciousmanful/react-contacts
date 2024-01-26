import React, { useState } from 'react';
import Contacts from './Contacts';
import ContactsForm from './ContactsForm';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([
    { name: 'Precious Adwoa', phoneNumber: '123-456-7890', location: 'City A' },
    { name: 'Miss Adwoa', phoneNumber: '0544532113', location: 'City B' },
  ]);

  const handleAddContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };
  const [showContactsForm, setShowContactsForm] = useState(false);

  const changeContactsForm = () => {
    setShowContactsForm(!showContactsForm);

  }

  return (
    <div className="App">
      <h1>React Contacts</h1>
      <Contacts contacts={contacts} changeContactsForm={changeContactsForm}/>
      {showContactsForm ?  <ContactsForm onAddContact={handleAddContact} /> : null}
     
    </div>
  );
}

export default App;

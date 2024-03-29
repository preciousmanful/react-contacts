import React from 'react';

function Contacts({ contacts, changeContactsForm, sign }) {

  return (
    <div className='contacts-container'>
      <h2>Contact List:</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <span>{contact.name}</span> <br />{contact.phoneNumber} <br /> {contact.location}
          </li>
        ))}
         <li className='add-button' onClick={changeContactsForm}>{ sign }</li>
      </ul>


    </div>
  );
}

export default Contacts;

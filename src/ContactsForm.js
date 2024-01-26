import React, { useState } from 'react';

function ContactsForm({ onAddContact }) {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { name, phoneNumber, location };
    onAddContact(newContact);
    console.log('New contact:', newContact);
    // You can clear the form fields here if needed
  };

  return (
    <div className='contacts-form-container'>
      <h2>Add New Contact:</h2>
      <form onSubmit={handleSubmit}>
        
        <input
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder='Precious Adwoa'
          required /><br />

       
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder='+233-4642-321'
          required
        /><br />

        
        <input 
          type="text" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
          placeholder='City C'
          required /><br />

        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
}

export default ContactsForm;

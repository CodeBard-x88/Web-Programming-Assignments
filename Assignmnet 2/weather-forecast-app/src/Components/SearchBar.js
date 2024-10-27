import React, { useState } from 'react';

export default function SearchBar() {
  const [city, setCity] = useState('');

  function onChange(event) {
    setCity(event.target.value); 
    event.preventDefault();
  }

  return (
    <div className='flex justify-center'>
      <input
        className='outline-none rounded-2xl w-3/5 h-10 p-2 mt-5'
        type='text'
        placeholder='Enter a city...'
        value={city}
        onChange={onChange}
      />
    </div>
  );
}

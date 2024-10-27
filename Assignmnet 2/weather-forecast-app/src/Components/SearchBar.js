import React from 'react';

export default function SearchBar(props) {
 
  function onKeyDown(event) {
    if (event.key === 'Enter' && event.target.value !== '')
    {
      props.setCity(event.target.value);
    }
  }

  return (
    <div className='flex justify-center'>
      <input
        className='outline-none rounded-2xl w-3/5 h-10 p-2 mt-5'
        type='text'
        placeholder='Enter a city...'
       
        onKeyDown={onKeyDown}
      />
    </div>
  );
}

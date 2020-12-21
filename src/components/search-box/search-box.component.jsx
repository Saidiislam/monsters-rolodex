import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange /* <= they are parameters */ }) => (   //this is a fuctional component, unlike class components functional components don't have access to states, constructor, life cycle method. but it do have it's uses.
    <input
        className='search'  //classname variable is used to use it in the CSS page
        type='search'   //type = 'search' bc it will be a searchbox
        placeholder= {placeholder} //it will be used here to make the searchbox placeholder dynamic
        onChange={handleChange} 
    />
)
import React from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
function SearchBar() {
  return (
    <div className='search_wrapper'>
        <input type="text" placeholder='search products ...'/>
        <button className='btn-icon' type='submit'><BiSearchAlt2/></button>
    </div>
  )
}

export default SearchBar
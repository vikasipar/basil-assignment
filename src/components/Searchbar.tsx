import React from 'react'

function Searchbar() {
  return (
    <div className='w-[225px] text-sm text-[#ADB5BD] flex border border-[#ADB5BD] rounded-lg py-2 px-4'>
        <img src="../static/search.png" alt="search icon" />
        <input className='ml-[10px]' type="text" placeholder='Search'/>
    </div>
  )
}

export default Searchbar

function Searchbar() {
  return (
    <div className='w-[225px] items-center text-sm text-[#ADB5BD] flex border border-[#ADB5BD] rounded-lg py-1 px-4'>
        <img src="../static/search.png" alt="search icon" />
        <input className='ml-[5px] text-base outline-none' type="text" placeholder='Search'/>
    </div>
  )
}

export default Searchbar
import Searchbar from './Searchbar';

function Header() {
  return (
    <header className='flex justify-between w-full h-20 py-4 px-8'>
        <div>
            <h2 className='text-xl font-semibold'>All Orders</h2>
            <p className='text-xs text-[#377DFF]'>All Orders</p>
        </div>
        <div className='flex items-center gap-8'>
            <Searchbar/>
            <img src="../static/notification.png" alt="notification icon" />
            <img src="../static/profile.png" alt="user profile picture" />
        </div>
    </header>
  )
}

export default Header
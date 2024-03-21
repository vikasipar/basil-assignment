import React from 'react';

function Sidebar() {
  return (
    <div className='flex flex-col justify-start w-20 border border-black gap-16 h-full'>
        <div className=''>
            <img className='w-fit mx-auto mt-6' src="../static/logo.png" alt="basil logo" />
        </div>
        <div>
            <ul className='flex flex-col px-6 gap-6 mx-auto w-fit'>
                <li>
                    <img src="../static/home.png" alt="home icon" />
                </li>
                <li>
                    <img src="../static/map.png" alt="map icon" />
                </li>
                <li>
                    <img src="../static/stats.png" alt="stats icon" />
                </li>
                <li>
                    <img src="../static/customers.png" alt="customers icon" />
                </li>
                <li>
                    <img src="../static/machines.png" alt="machines icon" />
                </li>
                <li>
                    <img src="../static/bookmark.png" alt="bookmark icon" />
                </li>
                <li>
                    <img src="../static/discount.png" alt="discount icon" />
                </li>
            </ul>
        </div>
        <div>
            <ul className='flex flex-col px-6 gap-6'>
                <li>
                    <img src="../static/settings.png" alt="settings icon" />
                </li>
                <li>
                    <img src="../static/logout.png" alt="logout icon" />
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar;
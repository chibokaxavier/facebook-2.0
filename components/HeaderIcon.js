import React from 'react'

const HeaderIcon = ({ Icon }) => {
    return (
        <div className='cursor-pointer  md:px-10 sm:h-14 flex items-center active:border-b-2 active:border-blue-500  rounded-xl  hover:bg-gray-100  '><Icon className="h-5" /></div>
    )
}

export default HeaderIcon
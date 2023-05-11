import Image from 'next/image'
import React from 'react'
import { BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon } from '@heroicons/react/solid'
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import HeaderIcon from './HeaderIcon'

const Header = () => {
    return (
        <div>
            {/* left */}
            <div className='flex items-center '>
                <Image src='https://links.papareact.com/5me' width={40} height={40} layout='fixed' />
                <div className='flex ml-2  items-center rounded-full bg-gray-100 p-2'>
                    <SearchIcon className='h-6 text-gray-600' />
                    <input className='ml-2  flex items-center bg-transparent outline-none placeholder-gray-500' type='text' placeholder='Search Facebook' />
                </div>

            </div>

            {/* center */}
            <div className='flex justify-center flex-grow'>
                <div className='flex space-x-6 md:space-x-2 '>
                    <HeaderIcon Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>
            {/* right */}
        </div>
    )
}

export default Header
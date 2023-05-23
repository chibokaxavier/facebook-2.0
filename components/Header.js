import Image from 'next/image'
import React, { useEffect } from 'react'
import { BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon } from '@heroicons/react/solid'
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import HeaderIcon from './HeaderIcon'
import { signOut, useSession } from 'next-auth/react'

const Header = () => {
    const { data: session } = useSession()
    return (
        <div className='sticky top-0 bg-white z-50 flex shadow-md p-2 lg:px-5'>
            {/* left */}
            <div className='flex items-center '>
                <Image src='https://links.papareact.com/5me' width={40} height={40} fixed  alt='header'/>
                <div className='flex ml-2  items-center rounded-full bg-gray-100 p-2'>
                    <SearchIcon className='h-6 text-gray-600' />
                    <input className='ml-2 hidden md:inline-flex  flex-shrink items-center bg-transparent outline-none placeholder-gray-500' type='text' placeholder='Search Facebook' />
                </div>
            </div>

            {/* center */}
            <div className='flex justify-center flex-grow'>
                <div className='flex space-x-3 md:space-x-2 '>
                    <HeaderIcon active Icon={HomeIcon}  className="text-blue-500"/>
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>
            {/* right */}

            <div className='flex justify-end sm:space-x-2 items-center'>
                {/*  */}
                <Image
                src={session.user.image}
                width={40}
                height={40}
                fixed
                className='rounded-full cursor-pointer'
                onClick={signOut}
                alt='header'
                />


                <p className=' hidden md:inline-flex font-semibold whitespace-nowrap'>
                  {session.user.name}
                </p>
                <ViewGridIcon className='icon'/>
                <ChatIcon className='icon' />
                <BellIcon className='icon'/>
                <ChevronDownIcon className='icon'/>
            </div>
        </div>
    )
}

export default Header
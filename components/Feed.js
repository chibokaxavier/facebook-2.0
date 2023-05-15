import React from 'react'
import Stories from './Stories'
import Inputbox from './Inputbox'

const Feed = () => {
  return (
    <div className='flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto'>
      <div className='mx-auto max-w-md md:max-w-lg lg:max-w-2xl'>
        {/* stories */}
        <Stories />
        <Inputbox />
        {/* posts */}
      </div> 

    </div>
  )
}

export default Feed
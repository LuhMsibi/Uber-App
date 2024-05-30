import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Header() {
    const headerMenu = [
        {
            id: 1,
            name: 'ride',
            icon: '/taxi.png'
        },
        {
            id: 2,
            name: 'package',
            icon: '/box.png'
        }
    ]
  return (
    <div className='p-5 pb-3 pl-10  border-b-[4px] border-gray-200 flex items-center justify-between'>
      <div className='flex gap-24 items-center'>
        {/* <img src="/logo.png" alt="logo"  width={70} height={70}/> */}
        <h2 className='font-bold cursor-pointer'><a href='/'>Lungisani Msibi</a></h2>
        <div className='flex gap-6 items-center'>
            {headerMenu.map((item) => (
                <div className='flex gap-2 items-center'>
                    <img src={item.icon} alt="logo" width={17} height={17} />
                    <h2 className='text-[14px] font-medium'>{item.name}</h2>
                </div>
            ))}
        </div>
      </div>
      <UserButton/>
    </div>
  )
}

export default Header

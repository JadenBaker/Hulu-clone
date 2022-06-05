import React from 'react'
import Image from 'next/image';
import HeaderItem from './HeaderItem';
import {
    HomeIcon,
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline';

function Header() {
  return (
    <div className='flex flex-col mt-5 sm:flex-row justify-between items-center'>
        <div className='flex flex-grow justify-evenly max-w-2xl'>
            <HeaderItem title="Home" Icon={HomeIcon}/>
            <HeaderItem title="Trending" Icon={LightningBoltIcon}/>
            <HeaderItem title="Verified" Icon={BadgeCheckIcon}/>
            <HeaderItem title="Collections" Icon={CollectionIcon}/>
            <HeaderItem title="Search" Icon={SearchIcon}/>
            <HeaderItem title="Account" Icon={UserIcon}/>
        </div>
        <Image src='https://links.papareact.com/ua6'
            width={100}
            height={100}
            className="object-contain"
        />
    </div>
  )
}

export default Header
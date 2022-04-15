import Image from 'next/image'
import React from 'react'

import { 
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon ,
  LightningBoltIcon,
  SearchIcon,
  UserIcon
} from "@heroicons/react/outline";

import HeaderItem from './HeaderItem'

function Header() {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <HeaderItem Title='HOME' Icon={HomeIcon}/>
        <HeaderItem Title='TRENDING' Icon={LightningBoltIcon}/>
        <HeaderItem Title='VERIFIED' Icon={BadgeCheckIcon}/>
        <HeaderItem Title='COLLECTION' Icon={CollectionIcon}/>
        <HeaderItem Title='SEARCH' Icon={SearchIcon}/>
        <HeaderItem Title='ACCOUNT' Icon={UserIcon}/>
      </div>

      <Image
        className="object-contain"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Hulu_logo_%282014%29.svg/2560px-Hulu_logo_%282014%29.svg.png"
        width="100"
        height="60"
      />
    </header>
  );
}

export default Header
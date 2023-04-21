import React from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-20 px-4'>
        <div>
            <h1>Beaches</h1>
        </div>
        <ul>
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>View</li>
            <li>Books</li>
        </ul>
        <div className='flex'>
            <BsPerson />
            <BiSearch />
        </div>
    </div>
  )
}

export default Navbar
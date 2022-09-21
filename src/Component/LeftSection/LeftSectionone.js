import React from 'react'
import './LeftSection.scss'
 import { Link } from 'react-router-dom'
import {twitter, home, explore, notifications, messages, lists, profile, more, bookmarks} from './Icon'

const LeftSectionone = () => {
  return (
    <div className='left-pane'>
       <div className='container'>
          <header> {twitter} </header>
          <nav>
           <Link to='/'> <span> {home}  Home </span> </Link>
           <Link to='/explore'> <span> {explore} Explore</span> </Link>
           <Link to='/'> <span> {notifications} Notification</span></Link>
           <Link to='/'> <span> {messages} Messages</span></Link>
           <Link to='/'> <span> {bookmarks} Bookmarks </span></Link>
           <Link to='/'> <span> {lists} Lists</span></Link>
           <Link to='/'> <span>  {profile} Profile</span></Link>
           <button className='more'> <span>{more} More</span> </button>
          </nav>

          <button className='tweet'> Tweet </button>
          <footer>
            <button className='account'>
             <div className='photo'>
               <img alt='user image' src='https://avatars.githubusercontent.com/u/85520088?v=4' />
             </div>
             <div>
                <div className='name'>Bright Jonathan</div>
                <div className='username'>@brightjonathan</div>
             </div>
            </button>
          </footer>
       </div>
    </div>
  )
}

export default LeftSectionone


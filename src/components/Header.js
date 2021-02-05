import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { HeaderOption } from './HeaderOption';

const Header = () => {
    return (
        <div className='header'>
            <div className='header_left'>
                <img className='logo' src='https://www.flaticon.com/svg/vstatic/svg/1384/1384046.svg?token=exp=1612399393~hmac=f6dc187e88dbc4082c3ef267ea47adf9' alt='' />

                <div className='header_search'>
                    <SearchIcon />
                    <input type='text' />
                </div>
            </div>

            <div className='header_right'>
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                <HeaderOption avatar='https://i.ibb.co/HtBVxqG/Professional-Photo-1.jpg' title='Me' />
            </div>
        </div>
    )
}

export default Header

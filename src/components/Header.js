import React from 'react'
import '../css/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { HeaderOption } from './HeaderOption';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout } from '../features/userSlice';

const Header = () => {
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    }

    return (
        <div className='header'>
            <div className='header_left'>
                <img className='logo' src='https://www.flaticon.com/svg/vstatic/svg/1384/1384046.svg?token=exp=1612399393~hmac=f6dc187e88dbc4082c3ef267ea47adf9' alt='logo' />

                <div className='header_search'>
                    <SearchIcon />
                    <input placeholder='Search' type='text' />
                </div>
            </div>

            <div className='header_right'>
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                <HeaderOption avatar={true}title='Me'  />
                <HeaderOption Icon={ExitToAppIcon} title='Log Out' onClick={logoutOfApp} />
            </div>
        </div>
    )
}

export default Header

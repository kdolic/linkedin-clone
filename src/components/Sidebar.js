import React from 'react'
import '../css/Sidebar.css'
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

const Sidebar = () => {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className='sidebar'>
            <div className='sidebar_top'>
                <img src='https://images.unsplash.com/photo-1612288528103-edc64749d4ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80' alt='' />
                <Avatar src={user.photoUrl} className='sidebar_avatar'>{user.email[0]}</Avatar>
                <h4>{user.displayName}</h4>
                <h5>{user.email}</h5>
                <p>Software Engineer Student at Lambda School</p>
            </div>
            <div className='sidebar_stats'>
               <div className="sidebar_stat">
                    <p>Who viewed your profile</p>
                    <p className="sidebar_statNumber">179</p>
               </div>
               <div className="sidebar_stat">
                    <p>Views of your post</p>
                    <p className="sidebar_statNumber">641</p>
               </div>
            </div>

            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('internship')}
                {recentItem('agile')}
                {recentItem('reactjs')}
                {recentItem('softwareengineer')}
                {recentItem('developer')}
            </div>
        </div>
    )
}

export default Sidebar

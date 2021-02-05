import { Avatar } from '@material-ui/core'
import React from 'react'
import '../css/Sidebar.css'

const Sidebar = () => {

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
                <Avatar className='sidebar_avatar' />
                <h4>Kenan Dolic</h4>
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

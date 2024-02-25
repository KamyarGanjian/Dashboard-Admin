import React from 'react';
import './Topbar.css';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">

        <div className="topLeft">
          <span className="logo">
            <span className="healthSpan"><img className='logoImg' src="/images/Logo.svg" alt="logo" />Salamat</span>
          </span>
        </div>

        <div className="topRight">

          <div className="topbarIconContainer">
            <NotificationsNoneOutlinedIcon />
            <span className="topIconBadge">6</span>
          </div>

          <div className="topbarIconContainer">
            <LanguageIcon />
            <span className="topIconBadge">2</span>
          </div>

          <div className="topbarIconContainer">
            <SettingsIcon />
          </div>

          <img src="/images/user.svg" alt="admin" className='topAvatar' />

        </div>

      </div>
    </div>
  )
}

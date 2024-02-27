import React from 'react';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentity from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { WorkOutline } from '@mui/icons-material';
import { Report } from '@mui/icons-material';

import { Link } from 'react-router-dom';

import './Sidebar.css';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">داشبورد</h3>
                    <ul className='sidebarList'>
                        <Link to="/" className="link">
                            <li className='sidebarListItem active'>
                                <LineStyleIcon className='sidebarIcon' />
                                صفحه اصلی
                            </li>
                        </Link>
                        <li className='sidebarListItem'>
                            <TimelineIcon className='sidebarIcon' />
                            تجزیه و تحلیل
                        </li>
                        <li className='sidebarListItem'>
                            <TrendingUpIcon className='sidebarIcon' />
                            فروش
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">دسترسی سریع</h3>
                    <ul className='sidebarList'>
                        <Link to="/users" className='link'>
                            <li className='sidebarListItem'>
                                <PermIdentity className='sidebarIcon' />
                                کاربران
                            </li>
                        </Link>
                        <Link to="/newUser" className='link'>
                            <li className='sidebarListItem'>
                                <PermIdentity className='sidebarIcon' />
                                کاربران جدید
                            </li>
                        </Link>
                        <Link to="/products" className='link'>
                            <li className='sidebarListItem'>
                                <StorefrontIcon className='sidebarIcon' />
                                محصولات
                            </li>
                        </Link>
                        <li className='sidebarListItem'>
                            <AttachMoneyIcon className='sidebarIcon' />
                            تراکنش ها
                        </li>
                        <li className='sidebarListItem'>
                            <BarChartIcon className='sidebarIcon' />
                            چارت
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">اعلانات</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <MailOutlineIcon className='sidebarIcon' />
                            صندوق پستی
                        </li>
                        <li className='sidebarListItem'>
                            <DynamicFeedIcon className='sidebarIcon' />
                            بازخورد
                        </li>
                        <li className='sidebarListItem'>
                            <ChatBubbleOutlineIcon className='sidebarIcon' />
                            پیام ها
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">کارمندان</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <WorkOutline className='sidebarIcon' />
                            مدیریت
                        </li>
                        <li className='sidebarListItem'>
                            <TimelineIcon className='sidebarIcon' />
                            تجزیه و تحلیل
                        </li>
                        <li className='sidebarListItem'>
                            <Report className='sidebarIcon' />
                            گزارشات
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

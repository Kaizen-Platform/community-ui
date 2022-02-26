import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BiIcons from 'react-icons/bi';
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Remarks',
    path: '/employees',
    icon: <BiIcons.BiCommentDetail />,
    cName: 'nav-text'
  },
  {
    title: 'Ideas',
    path: '/ideas',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  
  
  {
    title: 'Admin',
    path: '/Admin',
    icon: <RiIcons.RiAdminFill />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Review Form',
    path: '/progress',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];

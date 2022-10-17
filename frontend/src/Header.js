import React from 'react'
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';

function Header() {
  return (
    <div className="header">
    <IconButton>
     <PersonIcon fontsize="large" className="header__icon" />
     </IconButton>
    <img className="header__logo" src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon-2.png" alt="" />
    <IconButton>
    <ForumIcon fontsize="large" className="header__icon" />
    </IconButton>
    </div>
  )
}

export default Header
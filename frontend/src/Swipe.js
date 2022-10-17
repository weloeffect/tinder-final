import React from 'react'
import "./Swipe.css"
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';
function Swipe() {
  return (
    <div className='swipebtns'>
        <IconButton className='btn__repeat'>
          <ReplayIcon fontSize='large' />
        </IconButton>
        <IconButton className='btn__left'>
          <CloseIcon fontSize='large' />
        </IconButton>
        <IconButton className='btn__star'>
          <StarRateIcon fontSize='large' />
        </IconButton>
        <IconButton className='btn__right'>
          <FavoriteIcon fontSize='large' />
        </IconButton>
        <IconButton className='btn__lightning'>
          <FlashOnIcon fontSize='large' />
        </IconButton>
    </div>
  )
}

export default Swipe
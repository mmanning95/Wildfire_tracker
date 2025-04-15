import { GiCelebrationFire } from "react-icons/gi";
import React from 'react'

export const LocalMarker = ({ lat, lng, onClick }) => {
  return (
    <div className='location-marker' onClick={onClick}>
        <GiCelebrationFire className='location-icon' />
    </div>
  )
}

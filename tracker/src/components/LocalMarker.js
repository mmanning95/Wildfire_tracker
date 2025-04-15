import { LiaGripfire } from "react-icons/lia";
import React from 'react'

export const LocalMarker = ({ lat, lng, onClick }) => {
  return (
    <div className='location-marker' onClick={onClick}>
        <LiaGripfire className='location-icon' />
    </div>
  )
}

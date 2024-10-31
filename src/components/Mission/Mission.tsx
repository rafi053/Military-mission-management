import React from 'react'
import './Mission.css'
import { Missions } from '../../types/types'

interface OneMissionProps {
  oneMission: Missions
  deleteMission: (id: string) => Promise<void>
  updateStatusMission: (id: string) => Promise<void>
}

const OneMission: React.FC<OneMissionProps> = ({oneMission, deleteMission, updateStatusMission}) => {
  return (
    <div>
      {oneMission.name}
      {oneMission.status}
      {oneMission.priority}
      {oneMission.description}
      <button onClick={() => deleteMission(oneMission._id)}>Delete</button>
      <button onClick={() => updateStatusMission(oneMission._id)}>Update</button>
      
    </div>
  )    
}

export default OneMission

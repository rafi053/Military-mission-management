import React from 'react'
import './listMissions.css'
import { Missions } from '../../types/types'
import OneMission from '../Mission/Mission'

interface ListMissionsProps {
  missions : Missions[]
  deleteMission: (id: string) => Promise<void>
  updateStatusMission: (id: string) => Promise<void>
}

const ListMissions: React.FC<ListMissionsProps> = ({ missions, deleteMission, updateStatusMission }) => {
  return (
    <div>
      <h1>Missions</h1>
      {missions.map((oneMission) => (
        <OneMission key={oneMission._id} oneMission={oneMission} deleteMission={deleteMission} updateStatusMission={updateStatusMission}/>
      ))}
      
    </div>
  )
}

export default ListMissions

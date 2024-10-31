import React from 'react'
import './addMission.css'
import { Missions, status } from '../../types/types';

interface AddMissionProps {
  addMission: (mission: Missions) => Promise<void>; 
}

const AddMission: React.FC<AddMissionProps> = ({ addMission }) => {
  const [newMission, setNewMission] = React.useState<Missions | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name: string = e.currentTarget.nameToAdd.value;
    const status: string = e.currentTarget.status.value;
    const priority: string = e.currentTarget.priority.value;
    const description: string = e.currentTarget.description.value;
    const newMissionToAdd: any = { name, status, priority, description };

    setNewMission(newMissionToAdd);
    
    if (newMission) {
      await addMission(newMission);
      setNewMission(null);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name='nameToAdd' placeholder="Enter your Name" />
        <select name="status" id="">
          <option value="">Select Status</option>
          <option value={status.Pending}>{status.Pending}</option>
          <option value={status.InProgress}>{status.InProgress}</option>
          <option value={status.Completed}>{status.Completed}</option>
        </select>

        <select name="priority" id="">
          <option value="">Select Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <input type="text" name='description' placeholder="Enter your Description" />
        <button type="submit">Add mission</button>

        
      </form>
      
    </div>
  )
}

export default AddMission

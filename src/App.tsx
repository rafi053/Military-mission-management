import React, { useEffect } from 'react'
import './App.css'
import AddMission from './components/AddMission/AddMission'
import ListMissions from './components/ListMissions/ListMissions'
import axios from 'axios'
import { Missions } from './types/types'
const BASE_URL = "https://reactexambackend.onrender.com/missions";
const API_KEY = "8332575";

const App: React.FC = () => {

  const [missions, setMissions] = React.useState<Missions[]>([]);

const getAllMissions = async (): Promise<void> => {
    try {
        const response = await axios.get<Missions[]>(`${BASE_URL}/${API_KEY}`);
        setMissions(response.data);
      } catch (error) {
        console.error(error);
    }
};

useEffect(() => {
    getAllMissions();
}, []);
 
const addMission = async (mission: Missions): Promise<void>  => {
    try {
       await axios.post<Missions>(`${BASE_URL}/${API_KEY}`, mission);
        getAllMissions();
       
    } catch (error) {
        console.error(error);
        
    }
};

const deleteMission = async (id: string): Promise<void> => {
    try {
        await axios.delete(`${BASE_URL}/${API_KEY}/${id}`);
        getAllMissions();
    } catch (error) {
        console.error(error);
    }
};

const updateStatusMission = async (id: string): Promise<void> => {
  try {
    const singleMission: Missions | undefined = missions.find((mission) => mission._id === id);
    if (!singleMission) {
      throw new Error("cant find mission with this id");
    }
    if (singleMission.status === "Pending") {
      await axios.post(`${BASE_URL}/${API_KEY}/progress/${id}`, {
        ...singleMission,
        status: "In Progress",
      });
      getAllMissions();
      return;
    }
    if (singleMission.status === "In Progress") {
      await axios.post(`${BASE_URL}/${API_KEY}/progress/${id}`, {
        ...singleMission,
        status: "Completed",
      });
      getAllMissions();
      return;
    }
    if (singleMission.status === "Completed") {
      await axios.post(`${BASE_URL}/${API_KEY}/progress/${id}`, {
        ...singleMission,
        status: "Completed",
      });
      getAllMissions();
      return;
    }
  } catch (error) {
    console.error(error);
  }
    
    
}
  return (
    
    <div>
      <AddMission  addMission={addMission}/>
      <ListMissions missions={missions} deleteMission={deleteMission} updateStatusMission={updateStatusMission}  />
      
    </div>
  )
}

export default App

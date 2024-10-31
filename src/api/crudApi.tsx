import axios from "axios";
import { Missions } from "../types/types";
const BASE_URL = "https://reactexambackend.onrender.com/missions";
const API_KEY = "8332575";

export const getAllMissions = async () => {
    try {
        const response = await axios.get<Missions[]>(`${BASE_URL}/${API_KEY}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};


export const addMission = async (mission: Missions) => {
    try {
        const response = await axios.post<Missions>(`${BASE_URL}/${API_KEY}`, mission);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const deleteMission = async (id: string) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${API_KEY}/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const updateStatusMission = async (id: string) => {
    try {
        const response = await axios.post(`${BASE_URL}/${API_KEY}/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
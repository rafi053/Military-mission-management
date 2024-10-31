export interface Missions {
    _id: string;
    name: string;
    status: string;
    priority: string;
    description: string;
}

export enum status {
    Pending = "Pending",
    InProgress = "In Progress",
    Completed = "Completed",
}
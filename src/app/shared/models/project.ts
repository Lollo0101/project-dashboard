import { Resource } from "./resource";

export interface Project {
    id: number,
    name: string,
    description: string,
    startDate: Date,
    endDate: Date | null,
    progress: number,
    resources: Resource[]
}
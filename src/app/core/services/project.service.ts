import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { PROJECTS } from 'src/app/shared/mocks/projects';
import { Project } from 'src/app/shared/models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [];

  public constructor() {
    this.projects = PROJECTS;
  }

  public getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  public getProject(id: number): Observable<Project | undefined> {
    return of(this.projects.find(res => res.id === id));
  }

  public addProject(project: Project): Observable<number> {
    project.id = this.getLastId() + 1;

    this.projects.push(project);

    return of(project.id);
  }

  public updateProject(project: Project): Observable<Project[]> {
    return of(this.projects.splice(this.projects.findIndex(r => r.id === project.id), 1, project));
  }

  public deleteProject(project: Project): Observable<Project[]> {
    return of(this.projects.splice(this.projects.findIndex(r => r.id === project.id), 1));
  }

  public searchProjects(searchText: string): Observable<Project[]> {
    if(!searchText.trim()) {
      return of(this.projects);
    }

    return of(this.projects.filter(project => this.contains(project.name, searchText) || this.contains(project.description, searchText)));
  }

  //-UTILS---------------------------------------------------------------------------------------------------

	private getLastId(): number {
		const tmp = this.projects.map(r => r.id);

		return Math.max(...tmp);
	}

	private contains(str: string, searchText: string): boolean {
		return str.toLocaleLowerCase().includes(searchText.toLowerCase())
	}
}

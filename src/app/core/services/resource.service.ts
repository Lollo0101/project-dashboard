import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { RESOURCES } from 'src/app/shared/mocks/resources';
import { Resource } from 'src/app/shared/models/resource';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private resources: Resource[] = [];

  public constructor() {
    this.resources = RESOURCES;
  }

  public getResources(): Observable<Resource[]> {
    return of(this.resources);
  }

  public getResource(id: number): Observable<Resource | undefined> {
    return of(this.resources.find(res => res.id === id));
  }

  public addResource(resource: Resource): Observable<number> {
    resource.id = this.getLastId() + 1

    this.resources.push(resource);

    return of(resource.id);
  }

  public updateResource(resource: Resource): Observable<Resource[]> {
    return of(this.resources.splice(this.resources.findIndex(r => r.id === resource.id), 1, resource));
  }

  public deleteResource(resource: Resource): Observable<Resource[]> {
    return of(this.resources.splice(this.resources.findIndex(r => r.id === resource.id), 1));
  }

  public searchResources(searchText: string): Observable<Resource[]> {
    if(!searchText.trim()) {
      return of(this.resources);
    }

    return of(this.resources.filter(resource => this.contains(resource.name, searchText) || this.contains(resource.surname, searchText)));
  }

  //-UTILS---------------------------------------------------------------------------------------------------

	private getLastId(): number {
		const tmp = this.resources.map(r => r.id);

		return Math.max(...tmp);
	}

	private contains(str: string, searchText: string): boolean {
		return str.toLocaleLowerCase().includes(searchText.toLowerCase())
	}
}

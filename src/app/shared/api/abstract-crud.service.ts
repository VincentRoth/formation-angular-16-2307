import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

export abstract class AbstractCrudService<T extends { id?: number }> {
  protected http: HttpClient;

  constructor(protected endpoint: string) {
    this.http = inject(HttpClient);
  }

  get(id: number): Observable<T> {
    return this.http.get<T>(`${this.endpoint}/${id}`);
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.endpoint}`);
  }

  create(data: T): Observable<T> {
    return this.http.post<T>(`${this.endpoint}`, data);
  }

  update(data: T): Observable<T> {
    return this.http.put<T>(`${this.endpoint}/${data.id}`, data);
  }

  save(data: T): Observable<T> {
    if (data.id) {
      return this.update(data);
    } else {
      return this.create(data);
    }
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.endpoint}/${id}`);
  }
}

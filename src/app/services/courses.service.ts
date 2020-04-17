import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root' // With this, only one instance is shared for all the components (singleton)
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  loadCourses() {
    const params = new HttpParams()
    .set('page', '1')
    .set('pageSize', '10');

    return this.http.get<Course[]>('/api/courses', {params});
  }
}

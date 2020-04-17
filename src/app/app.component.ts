import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  courses: Array<Course>;

  constructor(private http: HttpClient) {

  }

  // To put some initialization logic, like triggering HTTP calls to the backend
  ngOnInit() {
    const params = new HttpParams()
    .set("page", "1")
    .set("pageSize", "10");

    this.http.get('/api/courses', {params}).pipe(
      tap(val => console.log('http 0: ', val)),
      map((val: Array<Course>) => val)
    ).subscribe( val => this.courses = val);
  }



}

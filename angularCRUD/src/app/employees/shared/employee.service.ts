import { Injectable } from '@angular/core';
import { Headers, Http, RequestMethod, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import {observable} from 'rxjs'
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/toPromise';
import { Employee } from './employee.model';

import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee : Employee;
  constructor(private http : Http) { }

  postEmployee(emp : Employee){
    var body = JSON.stringify(emp);
    var headerOptions= new Headers({'Content-Type': 'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post, headers : headerOptions})
    return this.http.post('http://localhost:59404/api/Employee', body, requestOptions).map(x => x.json());
    //return this.http.post('http://localhost:59404/api/Employee', body, requestOptions);

  }
}

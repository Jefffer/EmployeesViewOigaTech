import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData: Employee;
  list: Employee[];
  readonly rootURL = "http://localhost:57829/api";

  constructor(private http: HttpClient) { }

  postEmployee(formData: Employee) {
    return this.http.post(this.rootURL + '/Employees', formData);
  }

  refreshList(){
    this.http.get(this.rootURL + '/Employees').toPromise().then(res => this.list = res as Employee[]);
  }

  getEmployeeById(id: number) {
    this.http.get(this.rootURL + '/Employees').toPromise().then(res => this.list = res as Employee[]);
  }

  // getEmployees()
}

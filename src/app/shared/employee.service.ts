import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData: Employee;
  list: Employee[];
  listEmp: Employee[];
  readonly rootURL = "http://localhost:57829/api";

  constructor(private http: HttpClient) { }

  postEmployee(formData: Employee) {
    return this.http.post(this.rootURL + '/Employees', formData);
  }

  refreshList() {
    this.http.get(this.rootURL + '/Employees').toPromise().then(res => this.list = res as Employee[]);
  }

  getEmployeeById(id: number) {
    // this.listEmp = this.list.filter(x => x.idEmployee == id);
    console.log('getEmployeeById service');
    if (id != null) {
      this.http.get(this.rootURL + '/Employees/' + id).toPromise().then(res => this.list = res as Employee[]);
      console.log('getEmployeeById service 2');
    } else {
      this.refreshList();
    }
    console.log(this.list);
  }

  // getEmployees()
}

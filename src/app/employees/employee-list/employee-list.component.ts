import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private service: EmployeeService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  onSearch(form: NgForm) {
    console.log(form.value.idEmployee);
    this.service.getEmployeeById(form.value.idEmployee);
    console.log('finish onSearch');
  }
}

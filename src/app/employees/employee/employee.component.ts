import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  contractTypes = ['Hourly Salary Contract', 'Monthly Salary Contract'];

  constructor(private service: EmployeeService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      idEmployee: null,
      employeeName: '',
      employeePhone: '',
      employeePosition: '',
      contractType: '',
      hourlySalary: null,
      monthlySalary: null
    };
  }

  onSubmit(form: NgForm){
    this.insertRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postEmployee(form.value).subscribe(rest => {
      this.resetForm(form);
    });
  }

}

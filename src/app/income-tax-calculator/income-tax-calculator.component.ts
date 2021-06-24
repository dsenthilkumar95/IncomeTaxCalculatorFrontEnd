import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SalaryData } from './SalaryData';
@Component({
  selector: 'app-income-tax-calculator',
  templateUrl: './income-tax-calculator.component.html',
  styleUrls: ['./income-tax-calculator.component.css']
})
export class IncomeTaxCalculatorComponent implements OnInit {
  taxForm: FormGroup;
  constructor(private formBuilder:FormBuilder) {
    this.taxForm = this.formBuilder.group({
      basic:[0,Validators.min(0)],
      hra:[0, Validators.min(0)],
      epf:[0,Validators.min(0)],
      total:[0,Validators.min(0)]
    })
    }
  ngOnInit(): void {
 }
  monthSalary:Number = 0;
  calculate(){
    let salaryData: SalaryData;
    salaryData = this.taxForm.value as SalaryData;
    let taxableIncome = salaryData.total - (salaryData.hra*2) - (salaryData.epf) - 150000;
    
  }
}

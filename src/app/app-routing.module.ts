import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomeTaxCalculatorComponent } from './income-tax-calculator/income-tax-calculator.component';

const routes: Routes = [
  {path: "incometaxcalculator", component: IncomeTaxCalculatorComponent},
  {path: "", redirectTo: "incometaxcalculator" , pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

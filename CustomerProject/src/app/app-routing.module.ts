import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditCustomerComponent } from './customers/add-edit-customer/add-edit-customer.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CustomersComponent },
  { path: 'addcustomer', pathMatch: 'full', component: AddEditCustomerComponent },
  { path: 'editcustomer/:id', pathMatch: 'full', component: AddEditCustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

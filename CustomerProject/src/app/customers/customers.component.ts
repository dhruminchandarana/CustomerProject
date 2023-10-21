import { Component, OnInit } from '@angular/core';
import { CustomersService } from './customers.service';
import { CustomerDetails } from './customer.class';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customerList: CustomerDetails[];
  constructor(private customerService: CustomersService, private router: Router) { }

  ngOnInit(): void {
    this.getCustomerList();
  }

  getCustomerList() {
    this.customerService.getCustomerList().subscribe(resp => {
      this.customerList = resp;
    });
  }

  deleteCustomer(id: any) {
    this.customerService.deleteCustomer(id).subscribe(resp => {
      this.getCustomerList();
    });
  }

  addCustomer() {
    this.router.navigate(['/addcustomer']);
  }

  editCustomer(id: any) {
    this.router.navigate(['/editcustomer/' + id]);
  }

}

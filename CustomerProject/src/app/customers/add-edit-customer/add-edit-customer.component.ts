import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { CustomersService } from '../customers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.css']
})
export class AddEditCustomerComponent implements OnInit {

  customerForm = new FormGroup({
    id: new FormControl(0),
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    phone_Number: new FormControl(),
    country_code: new FormControl(),
    gender: new FormControl(),
    balance: new FormControl(0),
    salutation: new FormControl(),
    firstname_ascii: new FormControl(),
    firstname_country_rank: new FormControl(),
    firstname_country_frequency: new FormControl(),
    lastname_ascii: new FormControl(),
    lastname_country_frequency: new FormControl(),
    initials: new FormControl(),
    lastname_country_rank: new FormControl(),
    password: new FormControl(),
    country_code_alpha: new FormControl(),
    country_name: new FormControl(),
    primary_language_code: new FormControl(),
    primary_language: new FormControl(),
    currency: new FormControl(),
  });

  constructor(private customerService: CustomersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(event => {
      if(event.id) {
        this.getCustomerData(event.id);
      }
     });
  }

  saveCustomerData() {
    if (this.customerForm.value.id == 0 || this.customerForm.value.id == '0') {
      this.customerService.createCustomer(this.customerForm.value).subscribe(resp => {
      });
    } else {
      this.customerService.updateCustomer(this.customerForm.value).subscribe(resp => {
      });
    }
    this.router.navigate(['/']);
  }

  getCustomerData(id: any) {
    this.customerService.getCustomer(Number(id)).subscribe(resp => {
      this.customerForm.patchValue(resp);
    });
  }

}

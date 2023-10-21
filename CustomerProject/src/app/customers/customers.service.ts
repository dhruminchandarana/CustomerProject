import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod'
import { HttpClient } from '@angular/common/http';
import { CustomerDetails } from './customer.class';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  getCustomerList() {
    let url = environment.baseUrl + 'Customers';
    return this.http.get<CustomerDetails[]>(url);
  }

  deleteCustomer(id: any) {
    let url = environment.baseUrl + 'Customer/' + id;
    return this.http.delete(url);
  }

  createCustomer(customerDetails: any) {
    let url = environment.baseUrl + 'Customer';
    return this.http.post(url, customerDetails);
  }

  getCustomer(id: any) {
    let url = environment.baseUrl + 'Customer/' + id;
    return this.http.get<CustomerDetails>(url);
  }

  updateCustomer(customerDetails: any) {
    let url = environment.baseUrl + 'Customer/' + Number(customerDetails.id);
    return this.http.post(url, customerDetails);
  }
}

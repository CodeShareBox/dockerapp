import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
 url="http://192.168.2.43:9898/company"
  constructor(private helper:HttpClient) { }
  getCompany()
  {
    return this.helper.get(this.url);
  }
}

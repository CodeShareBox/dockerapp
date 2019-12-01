import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies :any;
  constructor(private service:CompanyService) { }

  ngOnInit() {
    var o=this.service.getCompany();
    o.subscribe((result)=>
    {
      this.companies=result;
    });
     
  }

}

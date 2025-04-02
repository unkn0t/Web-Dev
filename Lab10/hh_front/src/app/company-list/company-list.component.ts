import {Component, inject, OnInit} from '@angular/core';
import {Company} from '../company';
import {CompanyService} from '../company.service';
import {CompanyItemComponent} from '../company-item/company-item.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-company-list',
  imports: [
    CompanyItemComponent,
    NgForOf
  ],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];

  private companyService = inject(CompanyService);

  ngOnInit() {
    this.companyService.list().subscribe(companies => {
      this.companies = companies;
    });
  }
}

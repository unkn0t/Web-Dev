import {Component, inject, OnInit} from '@angular/core';
import {Vacancy} from '../vacancy';
import {CompanyService} from '../company.service';
import {ActivatedRoute} from '@angular/router';
import {NgForOf} from '@angular/common';
import {VacancyComponent} from '../vacancy/vacancy.component';

@Component({
  selector: 'app-company-details',
  imports: [
    NgForOf,
    VacancyComponent
  ],
  templateUrl: './company-details.component.html',
  styleUrl: './company-details.component.css'
})
export class CompanyDetailsComponent implements OnInit {
  vacancies: Vacancy[] = [];
  companyName: string = "Unknown";

  private route = inject(ActivatedRoute);
  private companyService = inject(CompanyService);

  ngOnInit() {
    const companyId = Number(this.route.snapshot.params['id']);

    this.companyService.listVacancies(companyId).subscribe(vacancies => {
      this.vacancies = vacancies;
    });

    this.companyService.get(companyId).subscribe(company => {
      this.companyName = company.name;
    });
  }
}

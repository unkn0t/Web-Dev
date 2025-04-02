import {Component, inject, Input} from '@angular/core';
import {CompanyService} from '../company.service';
import {Company} from '../company';
import {Router} from '@angular/router';

@Component({
  selector: 'app-company-item',
  imports: [],
  templateUrl: './company-item.component.html',
  styleUrl: './company-item.component.css'
})
export class CompanyItemComponent {
  @Input() company!: Company;

  private router = inject(Router);

  private productService = inject(CompanyService);

  goToVacancies() {
    this.router.navigate(['/companies', this.company.id]).then((result) =>
      result ? console.log(`Vacancies of ${this.company.name}`) : {}
    );
  }
}

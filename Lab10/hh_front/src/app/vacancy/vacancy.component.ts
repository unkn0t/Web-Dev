import {Component, Input} from '@angular/core';
import {Vacancy} from '../vacancy';

@Component({
  selector: 'app-vacancy',
  imports: [],
  templateUrl: './vacancy.component.html',
  styleUrl: './vacancy.component.css'
})
export class VacancyComponent {
  @Input() vacancy!: Vacancy;
  @Input() companyName!: string;
}

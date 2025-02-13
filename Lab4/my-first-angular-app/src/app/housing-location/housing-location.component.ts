import { Component, Input } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { HousingLocation } from '../housing-location';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [CommonModule, RouterModule, NgOptimizedImage],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}

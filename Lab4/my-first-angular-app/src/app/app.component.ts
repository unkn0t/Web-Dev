import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterModule, NgOptimizedImage],
})
export class AppComponent {

}

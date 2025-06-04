import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from '../footer/footer.component';
import { Car } from '../models/car/car';
import { MatCardModule } from '@angular/material/card';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [
    MatCardModule, 
    MatListModule, 
    MatSidenavModule, 
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    FooterComponent
  ],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.scss',
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate('600ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class CatalogueComponent {

}

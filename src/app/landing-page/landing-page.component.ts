import { style, transition, trigger, state, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  animations: [
    trigger(
      "landing-Animation", [
        state('void', style({ opacity: 0 })),
        transition(':enter', [
          animate('600ms ease-in', style({ opacity: 1}))
        ])
      ]
    )
  ]
})
export class LandingPageComponent {

}

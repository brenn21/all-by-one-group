import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CatalogueComponent } from './catalogue/catalogue.component';

export const routes: Routes = [
  { path: 'home', component: LandingPageComponent, pathMatch: 'full'},
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];


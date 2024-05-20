import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';

export const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'privacypolicy', component: PrivacypolicyComponent },
];

import { Route } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TrainingComponent } from './training/training.component';
export const appRoutes: Route[] = [
  {
    path: 'training',
    component: TrainingComponent,
  },
  {
    // path: 'signup',
    path: '',
    component: SignupComponent,
  },
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

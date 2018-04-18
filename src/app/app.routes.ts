import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BasketComponent } from './basket/basket.component';
import { PicturesComponent} from './pictures/pictures.component';
import { TasksComponent } from './tasks/tasks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { DonateComponent } from './donate/donate.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dash',
    component: DashboardComponent
  },
  {
    path:'donate',
    component: DonateComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path:'pictures',
    component: PicturesComponent
  },
  {
    path:'tasks',
    component: TasksComponent
  },
  {
    path: 'basket',
    component: BasketComponent,
    outlet: 'aux'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]

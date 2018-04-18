import { CalendarComponent } from './calendar/calendar/calendar.component';
import { CameraComponent } from './camera/camera.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
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
    path:'calendar',
    component: CalendarComponent
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
    path:'camera',
    component: CameraComponent
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
    path: '**',
    redirectTo: 'home'
  }
]

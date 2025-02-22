import { Routes } from '@angular/router';
import { AboutUsComponent } from './Component/about-us/about-us.component';
import { WelcomeAddComponent } from './Component/welcome-add/welcome-add.component';
import { ConferenceRoomComponent } from './Component/conference-room/conference-room.component';
import { GeneralComponent } from './Component/general/general.component';
import { CardiacComponent } from './Component/cardiac/cardiac.component';
import { UrologicalComponent } from './Component/urological/urological.component';
import { ThoracicComponent } from './Component/thoracic/thoracic.component';
import { GynaecologyComponent } from './Component/gynaecology/gynaecology.component';
import { HeadNeckComponent } from './Component/head-neck/head-neck.component';
import { MapCComponent } from './Component/map-c/map-c.component';
import { FormsComponent } from './Component/forms/forms.component';

export const routes: Routes = [
  {
    path: '',
    component: WelcomeAddComponent,
  },
  {
    path: 'about',
    component: AboutUsComponent,
  },
  // {
  //   path: 'welcome',
  //   component: WelcomeAddComponent,
  // },
  {
    path: 'conference',
    component: ConferenceRoomComponent,
  },
  {
    path: 'general',
    component: GeneralComponent,
  },
  {
    path: 'cardiac',
    component: CardiacComponent,
  },
  {
    path: 'urological',
    component: UrologicalComponent,
  },
  {
    path: 'thoracic',
    component: ThoracicComponent,
  },
  {
    path: 'gynaecology',
    component: GynaecologyComponent,
  },
  {
    path: 'Head-Neck',
    component: HeadNeckComponent,
  },
  {
    path: 'map-c',
    component: MapCComponent,
  },
  {
    path: 'forms',
    component: FormsComponent,
  },
];

export class AppRoutes {}

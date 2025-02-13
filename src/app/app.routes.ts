import { Routes } from '@angular/router';
import { AboutUsComponent } from './Component/about-us/about-us.component';
import { WelcomeAddComponent } from './Component/welcome-add/welcome-add.component';
import { ConferenceRoomComponent } from './Component/conference-room/conference-room.component';

export const routes: Routes = [
  {
    path: 'about',
    component: AboutUsComponent,
  },
  {
    path: 'welcome',
    component: WelcomeAddComponent,
  },
  {
    path: 'conference',
    component: ConferenceRoomComponent,
  },
];

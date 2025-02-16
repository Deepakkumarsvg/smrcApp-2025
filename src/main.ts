// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
// // import { FormsComponent } from './app/Component/forms/forms.component';
// // import { WelcomeAddComponent } from './app/Component/welcome-add/welcome-add.component';
// // import { formGuard } from './app/Component/forms-guard.guard';
// // import { provideRouter } from '@angular/router'; // ✅ Import this

// bootstrapApplication(
//   AppComponent
//   // (appConfig = {
//   //   providers: [
//   //     provideRouter([
//   //       { path: 'forms', component: FormsComponent }, // Default route (form page)
//   //       {
//   //         path: 'home',
//   //         component: WelcomeAddComponent,
//   //         canActivate: [formGuard],
//   //       }, // Home page (only after form submission)
//   //     ]),
//   //   ],
//   // })
// ).catch((err) => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

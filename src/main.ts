import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// it is a built in function that bootstraps the Angular application by
// initializing the root component (App) and applying the specified configuration
// (appConfig).
// If there are any errors during the bootstrapping process, they will be caught
// and logged to the console.
bootstrapApplication(App, appConfig).catch((err) => console.error(err));

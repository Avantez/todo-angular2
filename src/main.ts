import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { TodoAngular2AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(TodoAngular2AppComponent);

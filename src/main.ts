import { enableProdMode, InjectionToken, Injector, LOCALE_ID } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) { 
  enableProdMode();
  console.log(`production`);
}  

localStorage.setItem(`base_url`, '{ "projeto-financeiro": "http:localhost" }');
sessionStorage.setItem(`base_url`, '{ "projeto-session": "http:localhost"}');

localStorage.setItem(`user`, '{ "id": 1, "profile": 0 }');

platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }]
})
.catch(err => console.error(err));
  
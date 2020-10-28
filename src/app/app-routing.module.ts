import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: `boas-vindas`, loadChildren: () => import(`./boas-vindas/boas-vindas-routing/boas-vindas-routing.module`).then(_ => _.BoasVindasRoutingModule) },
    { path: `home`, loadChildren: () => import(`./home/home-routing.module`).then(_ => _.HomeRoutingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true} )],
  exports: [RouterModule],
  providers: [{ provide: 'BASE_URL', useValue: 'http://localhost' }]
})
export class AppRoutingModule { }

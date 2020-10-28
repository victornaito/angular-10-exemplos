import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BoasVindasComponent } from './../boas-vindas.component';
import { BoasVindasAuxComponent } from '../boas-vindas-aux/boas-vindas-aux.component';
import { ListarComponent } from 'src/app/home/listar/listar.component';
import { BoasVindasAuthGuardService } from '../services/guard/boas-vindas-auth-guard.service';
import { BoasVindasResolver } from '../services/resolver/boas-vindas.resolver';
import { HttpBaseService } from '../services/http-base.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: BoasVindasComponent, resolve: { resolve: BoasVindasResolver }, canActivate: [BoasVindasAuthGuardService] },
  { path: 'aux', component: BoasVindasAuxComponent },
  { path: '**', component: BoasVindasAuxComponent },

];

@NgModule({
  declarations: [
    BoasVindasAuxComponent,
    BoasVindasComponent,
    ListarComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
  providers: [
    BoasVindasResolver,
    BoasVindasAuthGuardService,
    HttpBaseService,
  ]
})
export class BoasVindasRoutingModule { }

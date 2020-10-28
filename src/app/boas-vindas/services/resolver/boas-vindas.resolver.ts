import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpBaseService } from '../http-base.service';

@Injectable({
  providedIn: 'root'
})
export class BoasVindasResolver implements Resolve<boolean> {

  constructor(private httpBaseService: HttpBaseService) { }
  
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

    if (!route || !route.params) return false;
    await this.httpBaseService.get().toPromise();
    return this.ehEdicao(route);
  }

  ehEdicao = ({ params }): boolean | Promise<boolean> => params.id > 0;
}

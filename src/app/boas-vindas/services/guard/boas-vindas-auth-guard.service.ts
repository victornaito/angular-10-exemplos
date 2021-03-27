import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class BoasVindasAuthGuardService implements CanActivate {

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    if (!route || !route.params) return false;
    
		const user = this.getUser();
		if (!user || !user.hasPermission()) this.router.navigate(['/home']);
	
		return true;
	}
	
	private getUser = () => {
		const user = JSON.parse(localStorage.getItem(`user`)) as User;
		return new User(user.id, user.profile);
	}

	getProducer = () => {
		const fila = new BehaviorSubject<any>("");
		return fila;
	}

	msgProducer = () => {
		
		this.getProducer().next("teste2 subject");
	
		return this.getProducer();
	}
}
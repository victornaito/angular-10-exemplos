import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BoasVindasInterceptor } from './boas-vindas.interceptor';

@Injectable({providedIn: 'root'})
export class HttpBaseService  {
  
  private readonly API_URL: string;

  constructor(private httpClient: HttpClient, ) {
    // super();
  }

  get = () =>  this.httpClient.get(`https://jsonplaceholder.typicode.com/posts/42`)
}

import { Injectable, NgModule } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BoasVindasInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const request = req.clone({
      setHeaders: {
        Authorization: 'Bearer JWT01010101'
      }
     });

    console.log("Update no Header do Request pelo Interceptor", request);

    return next.handle(request);
  }
}

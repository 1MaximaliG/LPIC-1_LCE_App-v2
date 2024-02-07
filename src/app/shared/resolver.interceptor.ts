import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResolverService } from './resolver.service';

@Injectable()
export class ResolverInterceptor implements HttpInterceptor {

  constructor(private resolverService: ResolverService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = 'loesen';
    if (this.resolverService.isResolved){
      const reqWithToken = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
    }
  });
  return next.handle(reqWithToken);
    }else{
      return next.handle(request);
    }
  }
}

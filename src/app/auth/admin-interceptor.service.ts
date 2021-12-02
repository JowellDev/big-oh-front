import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { exhaustMap, take } from 'rxjs/operators';
import { AdminAuthService } from './admin-auth.service';

@Injectable()
export class AdminInterceptorService implements HttpInterceptor {
  constructor(private authService: AdminAuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.authService.admin.pipe(
      take(1),
      exhaustMap((user) => {
        if (!user) {
          return next.handle(req);
        }
        const headers = new HttpHeaders({
          Authorization: `Bearer ${user.token}`,
        });
        const modifiedReq = req.clone({ headers });
        return next.handle(modifiedReq);
      })
    );
  }
}

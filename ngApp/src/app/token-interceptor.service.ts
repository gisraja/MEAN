import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import {AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private _inject: Injector) { }

  intercept(req, next){
    let _auth = this._inject.get(AuthService)
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${_auth.gettoken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}

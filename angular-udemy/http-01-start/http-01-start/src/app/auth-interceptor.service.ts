import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";


export class AuthInterceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const modifiedRequest = req.clone({headers: req.headers.append('Auth', 'asdf')});
    return next.handle(modifiedRequest);
  }
}

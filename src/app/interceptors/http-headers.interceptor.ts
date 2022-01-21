import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'x-rapidapi-key': 'd847d0e554mshf6d288d6a955241p129d20jsn87f02cb940a9',
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'

      },
      setParams: {
        key: 'b178848cd9fb42ae85674dc173ec32e6',
      }
    });
    return next.handle(req);
  }
}

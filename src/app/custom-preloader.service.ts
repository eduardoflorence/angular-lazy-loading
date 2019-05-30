import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of, timer } from 'rxjs';
import { flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloaderService implements PreloadingStrategy {

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    // return route.data && route.data.preload ? load() : of(null);

    const loadRoute = (delay: number) => delay
        ? timer(delay).pipe(flatMap(() => load()))
        : load();

    return route.data && route.data.preload
        ? loadRoute(route.data.delay)
        : of(null);
  }

}

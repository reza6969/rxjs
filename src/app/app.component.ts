import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
// import { take } from 'rxjs/take';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mySubject$;

  ngOnInit() {
    // this.mySubject$ = new ReplaySubject();
    // this.mySubject$.subscribe(x => console.log('first subscribe', x));
    // this.mySubject$.next(1);
    // this.mySubject$.next(2);
    // this.mySubject$.complete();
    // this.mySubject$.unsubscribe();
    // this.mySubject$.subscribe(x => console.log('second subscribe', x));
    // this.mySubject$.next(3);
    const number$ = Observable.interval(1000);
    const letters$ = Observable.of('a', 'b', 'c', 'd', 'e');

    letters$.switchMap(x =>
      number$
        .take(5)
        .map(i => i + x) 
    ).subscribe(x => console.log(x));

    Observable.fromEvent(document, 'click').subscribe(x => console.log(x));
  }

  ngOnDestroy() {
    // this.mySubject$.unsubscribe();
  }
}

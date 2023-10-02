import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
// import { take } from 'rxjs/take';

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
    const number$ = Observable.interval(1000).take(5);

    number$.subscribe(x => console.log(x));
  }

  ngOnDestroy() {
    // this.mySubject$.unsubscribe();
  }
}

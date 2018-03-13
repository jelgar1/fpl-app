import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';


@Injectable()
export class ApiService {

  constructor(private http: HttpClient,
              private messageService: MessageService) {
  }

  private corsUrl = 'https://cors-anywhere.herokuapp.com/';
  private mainUrl = 'https://fantasy.premierleague.com/drf/bootstrap-static';

  private log(message: string) {
    this.messageService.add('APIService: ' + message);
  }

  getMainUrl(): Observable<object> {
    return this.http.get<object>(this.corsUrl + this.mainUrl)
      .pipe(
        tap(details => this.log(`fetched details`)),
        catchError(this.handleError('getMainUrl', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

// @Injectable()
// export class ApiService {
//   constructor(@Inject(Http) public http: Http) {
//   }
//   teamUrl(): string {
//     return 'https://fantasy.premierleague.com/drf/bootstrap-static';
//   }
//   playerUrl(): string {
//     return 'https://fantasy.premierleague.com/drf/element-summary/';
//   }
//   get(url: string, playerId: number = null): Observable<Object> {
//     let id: string = playerId ? playerId.toString() : '';
//     return this.http.get(
//       'https://cors-anywhere.herokuapp.com/' + url + id)
//       .map(response => response.json());
//   }

import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {City, Offer} from '../interfaces';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class OffersService {

  offers: Offer[] = null;
  activeCity: City = null;
  activeOffers: Offer[] = [];
  errorMsg: string = null;

  constructor(private http: HttpClient) {
  }

  // getById(id: number) {
  //   return this.offers.find((offer) => offer.id === id);
  // }

  setActiveCity(city: City) {
    if (city) {
      this.activeCity = city;
    }
  }

  setActiveOffers(activeoffers: Offer[]) {
    if (activeoffers) {
      this.activeOffers = activeoffers;
    }
  }

  getAllOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(`https://htmlacademy-react-2.appspot.com/six-cities/hotels`)
      .pipe(
        map(res => (this.offers = res)),
        catchError((err: HttpErrorResponse) => {
          this.errorMsg = err.error.error;
          return throwError(err);
        })
      );
  }

  getById(id: number): Observable<Offer> {
    return this.http.get<Offer[]>(`https://htmlacademy-react-2.appspot.com/six-cities/hotels`)
      .pipe(
        map((res) => {
          return res.find((offer) => offer.id === id);
        }),
        catchError((err: HttpErrorResponse) => {
          this.errorMsg = err.error.error;
          return throwError(err);
        })
      );
  }

}

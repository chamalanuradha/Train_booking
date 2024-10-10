import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CONSTANT } from '../constant/constant';
import { Observable, throwError } from 'rxjs';
import { ResponseModel } from '../models/station';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StationService {
  apiEndPoint: string = '';

  constructor(private http: HttpClient) { 
    this.apiEndPoint = environment.ApiEndPoint;
  }

  getAllStation(): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(this.apiEndPoint + CONSTANT.ENDPOINTS.GET_ALL_STATION)
      .pipe(
        catchError((error) => {
          console.error('Error fetching stations:', error);
          return throwError(() => new Error('Error fetching stations'));
        })
      );
  }
}

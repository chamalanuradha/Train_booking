import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CONSTANT } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class StationService {
apiEndPoint : string ='';

  constructor(private http:HttpClient) { 
    this.apiEndPoint = environment.ApiEndPoint;
  }

  getAllStation(){
    return this.http.get(this.apiEndPoint + CONSTANT.ENDPOINTS.GET_ALL_STATION)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class StationService {
  apiEndPoint: string = 'https://freeapi.miniprojectideas.com/api/TrainApp';

  constructor(private http: HttpClient) { 

  }

  getAllStation () {
    return this.http.get(`${this.apiEndPoint}/GetAllStations`)
  }
}

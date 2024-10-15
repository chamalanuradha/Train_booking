import { Component,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StationService } from '../../service/station.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
activatedRoute = inject (ActivatedRoute);
trainerService = inject (StationService)
searchData : Search = new Search (); 

 constructor (){
   this.activatedRoute.params.subscribe((res:any) => {
     debugger
   })
 }
 getSearchTrains (){
   this.trainerService.getSearchTrains(this.searchData.fromStationId, this.searchData.toStationId,this.searchData.dateOfTravel)
 }
}

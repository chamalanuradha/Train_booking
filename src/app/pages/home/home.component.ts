import { Component, OnInit} from '@angular/core';
import { IStation } from '../../models/station';
import { StationService } from '../../service/station.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {

stationList : IStation[] = []

fromStationId: number = 0;
toStationId: number = 0;
dateOfTravel: string = '';

  constructor (private stationsrv:StationService){
  }
  
  ngOnInit(): void{
    this.loadStation();
  }

  loadStation(){
    this.stationsrv.getAllStation().subscribe((res:any) =>{
      this.stationList = res.data;
    }) 
  }

  onSearch(){
    if (this.fromStationId == 0 || this.toStationId == 0 || this.dateOfTravel == ' '){
      alert("Please select station")
    }
    else if (this.fromStationId == this.toStationId){
      alert("Please select different station")
    }
  }

}

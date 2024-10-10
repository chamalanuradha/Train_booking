import { Component, OnInit} from '@angular/core';
import { IStation, ResponseModel } from '../../models/station';
import { StationService } from '../../service/station.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})
export class HomeComponent implements OnInit {

stationList : IStation[] = []

  constructor (private stationsrv:StationService){

  }
  ngOnInit(): void{
    this.loadStation();
  }

  loadStation(){
    this.stationsrv.getAllStation().subscribe((res:ResponseModel) =>{
      this.stationList = res.data;

    },error => {
      alert("error" + JSON.stringify(error))
    })
  }

}

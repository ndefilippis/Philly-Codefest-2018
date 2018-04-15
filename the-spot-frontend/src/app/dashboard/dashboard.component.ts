import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';
import {MatSidenav} from '@angular/material/sidenav';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

//Fake event data
/*export locations = [
  {"lat": }
]*/

export class DashboardComponent implements OnInit {

  
  @ViewChild('gmap') gmapElement: any;

  @ViewChild('sidenav') sidenav: MatSidenav;
  

  map: google.maps.Map;
  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }


  constructor() { }

  ngOnInit() {
    var myLatLng = {lat: 39.95670, lng: -75.19067};
    
    var mapProp = {
      center: new google.maps.LatLng(39.95670, -75.19067),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    var markerContent = '<div style = "width: 250px"><div name="Name" style="color: red; font-weight: bold;font-size:17px"> Philly{CODEFEST} </div>'+
    	'<div name="location"> DASKALAKIS ATHLETIC CENTER\nDREXEL UNIVERSITY, PHILADELPHIA, PA</div>'+
	'<div style = "text-align:left; font-size:15px" name = "rating">'+
	'<img style="width: 15px; height: 15px" src="/assets/star.svg"></img>'+
	'<img style="width: 15px; height: 15px" src="/assets/star.svg"></img>'+
	'<img style="width: 15px; height: 15px" src="/assets/star.svg"></img>'+
	'<img style="width: 15px; height: 15px" src="/assets/star.svg"></img>'+
	'<img style="width: 15px; height: 15px" src="/assets/star.svg"></img>'+
	'4.7/5.0</div></div>';

    var infowindow = new google.maps.InfoWindow({
    	content: markerContent,
    });

    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    var marker = new google.maps.Marker({
      position: myLatLng,
<<<<<<< HEAD
      map: this.map ,
      title: 'CodeFest'
    });
    marker.addListener('click', x => {infowindow.open(this.map, marker);});
=======
      map: this.map,
      title: 'Hello World!'
    });
>>>>>>> e634908c91aff5f9d7e79ca311ba0225f87129c3
  }
}

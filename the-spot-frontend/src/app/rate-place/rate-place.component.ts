import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate-place',
  templateUrl: './rate-place.component.html',
  styleUrls: ['./rate-place.component.css']
})
export class RatePlaceComponent implements OnInit {


  alertify() {
    alert("Rating Successfully Submitted! ");

  }

  constructor() {}


  ngOnInit() {
  }

  

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-rate-place',
  templateUrl: './rate-place.component.html',
  styleUrls: ['./rate-place.component.css']
})
export class RatePlaceComponent implements OnInit {


  alertify() {
    alert("Rating Successfully Submitted! ");

  }

  constructor(private router: Router, private route: ActivatedRoute) {}


  ngOnInit() {
  }

  

}

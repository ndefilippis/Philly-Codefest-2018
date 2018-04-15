import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-landmark-description',
  templateUrl: './landmark-description.component.html',
  styleUrls: ['./landmark-description.component.css']
})
export class LandmarkDescriptionComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  goToEmerg(){
    this.router.navigate([`../siteMap`], { relativeTo: this.route });
  }

  ngOnInit() {
  }

}

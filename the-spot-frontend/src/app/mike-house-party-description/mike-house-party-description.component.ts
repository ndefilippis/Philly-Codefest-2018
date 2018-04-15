import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-mike-house-party-description',
  templateUrl: './mike-house-party-description.component.html',
  styleUrls: ['./mike-house-party-description.component.css']
})
export class MikeHousePartyDescriptionComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  goToEmerg(){
    this.router.navigate([`../siteMap`], { relativeTo: this.route });
  }

  ngOnInit() {
  }

}

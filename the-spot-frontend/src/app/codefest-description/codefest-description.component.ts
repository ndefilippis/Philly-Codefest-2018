import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-codefest-description',
  templateUrl: './codefest-description.component.html',
  styleUrls: ['./codefest-description.component.css']
})
export class CodefestDescriptionComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  goToEmerg(){
    this.router.navigate([`../siteMap`], { relativeTo: this.route });
  }

  ngOnInit() {
  }

}

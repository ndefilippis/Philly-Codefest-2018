import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-site-map',
  templateUrl: './site-map.component.html',
  styleUrls: ['./site-map.component.css']
})
export class SiteMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  goToEmerg(){
      let notification = "ACTIVE SHOOTER ALERT: PLEASE GO TO NEAREST EXIT";
      let  phoneNumbers  = ["18565341534", "12158592231", "14849650473", "12673421970", "12674012042"];
      const req = (phoneNumbers) => fetch(`https://mmaris.lib.id/flyingsaucer@dev/?recipient=${phoneNumbers}&body=${notification}`)
                  .then(response => response.json())
                  .then(data => console.log(data));
      Promise
        .all(phoneNumbers.map(req))
        .then(() => console.log("Finished"));
  }

}

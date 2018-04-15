import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})

export class LoginScreenComponent implements OnInit {

  constructor(private router: Router, private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  login(data) {
    this.http.post('10.250.98.231:3000/login', data).subscribe(res => {
      console.log(res);
      if(res.status == 301){
        this.router.navigate([`../dashboard`], {relativeTo: this.route});
      }
      else{
        this.router.navigate([`../login`], {relativeTo: this.route});
      }
    })
  }
}

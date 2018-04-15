import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  // For hiding password in pwd field
  public hide = true;



  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

  }

  goToSignUp(){
    this.router.navigate([`../signup`], { relativeTo: this.route });
  }

  login(){
    var email = (<HTMLInputElement>document.getElementById("username")).value;
    var password = (<HTMLInputElement>document.getElementById("password")).value;
    firebaseAuth(email, password,
      () => {
        this.router.navigate([`../dashboard`], { relativeTo: this.route });
      },
      () => {
        this.router.navigate([`../`], { relativeTo: this.route });
      })
  }

}

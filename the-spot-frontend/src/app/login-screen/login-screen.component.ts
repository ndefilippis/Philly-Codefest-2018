import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';


@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css'],
  providers: [AngularFireAuth]
})

export class LoginScreenComponent implements OnInit {

  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  // For hiding password in pwd field
  public hide = true;



  constructor(private afAuth: AngularFireAuth,
              private db: AngularFireDatabase,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("Here")
  }

  goToSignUp(){
    this.router.navigate([`../signup`], { relativeTo: this.route });
  }

  login(){
    var email = (<HTMLInputElement>document.getElementById("username")).value;
    var password = (<HTMLInputElement>document.getElementById("password")).value;
    this.firebaseAuth(email, password,
      () => {
        this.router.navigate([`../dashboard`], { relativeTo: this.route });
      },
      () => {
        this.router.navigate([`../`], { relativeTo: this.route });
      })
  }

  firebaseAuth(email, password, zuccCallback, fuckCallback){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      console.log("Success");
      zuccCallback()
    })
    .catch(function(error) {
      console.log("Error logging in: ", error.code);
      fuckCallback();
    });
  }

  resetPwd(){
    var auth = firebase.auth();
    var email = (<HTMLInputElement>document.getElementById("username")).value;
    return auth.sendPasswordResetEmail(email)
    .then(function() {
      console.log("Sent email");
    }).catch(function(error) {
      console.log("Error resetting password: ", error.code);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-signup-screen',
  templateUrl: './signup-screen.component.html',
  styleUrls: ['./signup-screen.component.css'],
  providers: [AngularFireAuth]
})
export class SignupScreenComponent implements OnInit {

  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

    foods = [
      {value: 'steak-01', viewValue: 'Male'},
      {value: 'pizza-12', viewValue: 'Female'},
      {value: 'steak-03', viewValue: 'Bigender'},
      {value: 'pizza-14', viewValue: 'Andro'},
      {value: 'steak-011', viewValue: 'Demigirl'},
      {value: 'pizza-1111', viewValue: 'Transgender'},
      {value: 'steak-02121', viewValue: 'Butch'},
      {value: 'pizza-1123123', viewValue: 'Episcene'},
      {value: 'steak-0356743', viewValue: 'Pixie'},
      {value: 'pizza-13456', viewValue: 'Trans Person'},
      {value: 'steak-087654', viewValue: 'Pangender'},
      {value: 'pizza-12345', viewValue: 'Other'},
      {value: 'tacos-2235324', viewValue: 'MTF'}
    ];

  // For hiding password in pwd field
  public hide = true;


  constructor(private afAuth: AngularFireAuth,
              private db: AngularFireDatabase,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  createAcc(){
    var data = {
      "email": (<HTMLInputElement>document.getElementById("email")).value,
      "password": (<HTMLInputElement>document.getElementById("pwd")).value,
      "name": (<HTMLInputElement>document.getElementById("name")).value,
      "age": (<HTMLInputElement>document.getElementById("age")).value,
      "gender": "Other"
    };
    this.firebaseCreateAcc(data,
      () => {
        this.router.navigate([`../dashboard`], { relativeTo: this.route })
      },
      () => {
        this.router.navigate([`../signup`], { relativeTo: this.route })
      }
    )
  }

  firebaseCreateAcc(data, zucc, fuck){
    var email = data.email;
    var password = data.password;
    var name = data.name;
    var age = data.age;
    var gender = data.gender;

    var users = this.db.list('users');
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then(function(user) {
      console.log("User created");
      users.push({
        name: name,
        email: email,
        age: age,
        gender: gender
      });
      /*var user: User = firebase.auth().currentUser;
      user.updateProfile({
        displayName: name,
        email: email
      }).then(function() {
        console.log("User settings updated");
        zucc()
      }).catch(function(error) {
        console.log("Error in setting user fields: ", error.code);
        fuck();
      });*/
      //load into main screen here
      zucc();
    })
    .catch(function(error) {
      console.log("Error creating account: ", error);
      fuck();
    });
  }
}

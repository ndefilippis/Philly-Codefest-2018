import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import * as firebase from 'firebase';
import '@firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit() {
   
  }
}

var config = {
    apiKey: "AIzaSyADNZ1IAS8asFKdYoHD3VxQgB5M2L5D3xk",
    authDomain: "the-spot-philly-codefest.firebaseapp.com",
    databaseURL: "https://the-spot-philly-codefest.firebaseio.com",
    projectId: "the-spot-philly-codefest",
    storageBucket: "the-spot-philly-codefest.appspot.com",
    messagingSenderId: "989646158505"
  };
  firebase.initializeApp(config);
  var db = firebase.firestore();
  
  export function firebaseCreateAcc(data, zucc, fuck){
    var email = data.email;
    var password = data.password;
    var name = data.name;
    var age = data.age;
    var gender = data.gender;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function() {
      console.log("User created");
      db.collection("users").add({
        name: name,
        email: email,
        age: age,
        gender: gender
      });
      var user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: name,
		photoURL: 'none'
      }).then(function() {
        console.log("User settings updated");
        zucc()
      }).catch(function(error) {
        console.log("Error in setting user fields: ", error.code);
        fuck();
      });
      //load into main screen here
    })
    .catch(function(error) {
      console.log("Error creating account: ", error.code);
    });
  }
  export function firebaseAuth(email, password, zuccCallback, fuckCallback){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function() {
      console.log("Success");
      zuccCallback()
    })
    .catch(function(error) {
      console.log("Error logging in: ", error.code);
      fuckCallback();
    });
  }
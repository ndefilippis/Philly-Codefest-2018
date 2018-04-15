import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-screen',
  templateUrl: './signup-screen.component.html',
  styleUrls: ['./signup-screen.component.css']
})
export class SignupScreenComponent implements OnInit {
  genders = [
    {value: 'male-0', viewValue: 'Male'},
    {value: 'female-1', viewValue: 'Female'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ]
  constructor() { }

  ngOnInit() {
  }

}

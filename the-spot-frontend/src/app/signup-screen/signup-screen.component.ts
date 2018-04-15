import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup-screen',
  templateUrl: './signup-screen.component.html',
  styleUrls: ['./signup-screen.component.css']
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


  constructor() { }

  ngOnInit() {
  }

}

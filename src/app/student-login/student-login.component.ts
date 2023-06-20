import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent {
  loginForm !: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      // Perform login logic here, such as sending data to an API or displaying a success message.
      console.log('Login successful!');
    }
  }
}

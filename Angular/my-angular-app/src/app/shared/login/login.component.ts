import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Output() loggedIn = new EventEmitter<boolean>();
  isLoggedIn = false;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['abc', Validators.required],
      password: ['123', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoggedIn = true;
      this.loggedIn.emit(this.isLoggedIn);
    }
  }
  welcomeInit(ev:string){
     alert(ev);
  }
}

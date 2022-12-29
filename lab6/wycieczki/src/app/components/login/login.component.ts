import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private auth: AuthService) { }

  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;

  ngOnInit(): void{
    this.createFormControls();
  }

  createFormControls() {

    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
      ])
    });
  }


  onSubmit(){

    if(this.loginForm.valid){

      let email = this.loginForm.get('email')!.value;
      let password = this.loginForm.get('password')!.value;

      this.auth.login(email!, password!).catch(err => console.log(err.message));
      this.auth.signInEmailPass(email!,password!);
     
      this.loginForm.reset();
    }

  }

}

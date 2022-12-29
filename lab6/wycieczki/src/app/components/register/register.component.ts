import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(private auth: AuthService) { }

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

      this.auth.registerEmailPass(email!, password!);
     

      this.loginForm.reset();
    }

  }

}

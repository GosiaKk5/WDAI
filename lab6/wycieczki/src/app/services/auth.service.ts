import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {TripsService} from 'src/app/services/trips.service'
import {Roles, User} from 'src/assets/User' 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;
  userRoles: Roles = {
    guest: true,
    client: false,
    menager: false,
    admin: false,
    banned: false
  };
  persistance: string = 'local'

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private db: TripsService) {
      fireAuth.authState.subscribe(async (ev: any) => {
        if(ev){
          this.userData = ev;
          const roles = await this.db.getUserRoles(ev?.uid);
          this.userRoles = roles as Roles;
        }else {
          this.userData = null;
          this.userRoles = {
            guest: true,
            client: false,
            menager: false,
            admin: false,
            banned: false
          };
        }
      });
  }

  signInUser(email: string, password: string) {
    return this.fireAuth.setPersistence(this.persistance).then((_) => {
      return this.fireAuth
        .signInWithEmailAndPassword(email, password)
        .then((ev) => {
          this.router.navigate(['home']);
        })
        .catch((err) => {
          window.alert(err.message);
        });
    });
  }

  registerNewUser(email: string, password: string) {
    return this.fireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        let userData = new User(res.user);
        this.db.addNewUser(userData);
        this.router.navigate(['home']);
      })
      .catch((err) => {
        window.alert(err.message);
      });
  }

  getuser() {
    return this.fireAuth.currentUser;
  }

  
  login(email : string, password: string) {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  register(email:string, password: string) {
    return this.fireAuth.createUserWithEmailAndPassword(email, password);
  }

  logOut() {
    return this.fireAuth.signOut();
  }

  setPersistance(s: string): void{
    this.fireAuth.setPersistence(s);
  }

  getLogged() {
    return this.userData; 
  }

  getUser(){
    return this.fireAuth.currentUser;
  }

  isLoggedIn() {
    return this.userData != null;
  }

  getAuthenticated(): Observable<any> {
    return this.fireAuth.authState;
  }


}

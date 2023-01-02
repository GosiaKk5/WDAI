import { Component } from '@angular/core';
import { User } from 'src/assets/User';
import { AuthService } from 'src/app/services/auth.service';
import { TripsService } from 'src/app/services/trips.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent {

  users: User[] = [];

  constructor(private tripsService: TripsService,public auth: AuthService){
  }

  ngOnInit(): void{
    this.tripsService.getUsers().subscribe((users) => {
      this.users = [];
      for (let user of users) {
        let userToAdd = new User(user.payload.val());
        console.log(user.payload.val());
        userToAdd.uid = user.payload.key || 'undefined';
        this.users.push(userToAdd);
      }});
    console.log(this.users)
  }

  setBanned(user : User){
    user.roles.banned = !user.roles.banned;
    console.log(user.uid)
    this.tripsService.changeUserRole(user.uid, 'banned', String(user.roles.banned)) 
  }

  setMenager(user : User){
    user.roles.menager = !user.roles.menager;
  }

  setAdmin(user : User){
    user.roles.admin = !user.roles.admin;
  }

}

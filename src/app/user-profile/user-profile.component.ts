import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user: User = {
    lastname: 'Doe',
    firstname: 'John',
    age: 25,
    quote:'two beer or not to beer',
    picture: 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  constructor() { }

  ngOnInit(): void {
  }

  displayingAge : boolean = true;

  hiddingAge() {
    this.displayingAge = !this.displayingAge;
  }

}

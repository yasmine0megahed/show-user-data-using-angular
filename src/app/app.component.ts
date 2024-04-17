import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NavbarComponent } from './navbar/navbar.component';
import {user} from './models/user';
import userJason from '../assets/users.json'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'users';
  users :Array <user> =userJason

}

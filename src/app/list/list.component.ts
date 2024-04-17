import { Component, Input } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { SearchComponent } from '../search/search.component';
import { user } from '../models/user';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ItemComponent,SearchComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
@Input() users!:user[]
}

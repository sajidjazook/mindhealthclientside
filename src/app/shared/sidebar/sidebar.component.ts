import { Component, OnInit } from '@angular/core';
import { Sidebar } from 'ng-sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  
})
export class SidebarComponent implements OnInit {  
  

  constructor() { }

  ngOnInit() {
  } 

  // onClickedOutside(e: Event) {
  //   console.log('Clicked outside:', e);
  // }
}

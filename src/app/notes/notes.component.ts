import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  documents = [
    { employees: [ {name: 'John Smith', age: 28, department: 'IT'},
            {name: 'Sarah Johnson', age: 32, department: 'IT'},
            {name: 'Mark Miller', age: 46, department: 'IT'}
        ]
    },
    { employees: [ ] },
    { employees: [ {name: 'Jimmy Colleen', age: 35, department: 'ADMIN'},
            {name: 'Olivia Powell', age: 37, department: 'ADMIN'}
        ]
    },
];  
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params['id']);
  }

}

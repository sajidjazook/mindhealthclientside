import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-congratulations',
  templateUrl: './congratulations.component.html',
  styleUrls: ['./congratulations.component.css']
})
export class CongratulationsComponent implements OnInit {
  public random: number;
  constructor() { }

  ngOnInit() {
    this.random =  Math.floor(Math.random() * 902203435 ) +1;
    console.log(this.random)
  }


}

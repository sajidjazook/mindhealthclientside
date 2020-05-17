import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NotesService } from 'src/services/notes.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  public searchKey = "";
  discussions = [];
  noResult = false;

  constructor(private activatedRoute: ActivatedRoute, private notesService: NotesService) {


  }

  ngOnInit() {

    this.noResult = false;

    this.searchKey = this.activatedRoute.snapshot.params['key']
    // console.log(this.activatedRoute.snapshot.params['key']);
    this.notesService.searchDiscussions(this.activatedRoute.snapshot.params['key'])
      .subscribe((res) => {
        this.noResult = false;

        localStorage.setItem("previousKey", this.activatedRoute.snapshot.params['key'])

        console.log(res)
        if (res.length == 0) {
          this.discussions = res;

          this.noResult = true;
        } else {
          this.discussions = res;
        }
      });

  }

  ngDoCheck() {
    // this.noResult = false;
    this.searchKey = this.activatedRoute.snapshot.params['key']
    if (localStorage.getItem("previousKey") != null) {
      if (this.searchKey != localStorage.getItem("previousKey")) {

        this.notesService.searchDiscussions(this.activatedRoute.snapshot.params['key'])
          .subscribe((res) => {
            this.noResult = false;

            localStorage.setItem("previousKey", this.activatedRoute.snapshot.params['key'])


            console.log(res)
            if (res.length == 0) {
              this.discussions = res;

              this.noResult = true;

            } else {
              this.discussions = res;

            }
          });
      }

    } else {
      this.notesService.searchDiscussions(this.activatedRoute.snapshot.params['key'])
        .subscribe((res) => {
          this.noResult = false;

          localStorage.setItem("previousKey", this.activatedRoute.snapshot.params['key'])


          console.log(res)
          if (res.length == 0) {
            this.discussions = res;

            this.noResult = true;

          } else {
            this.discussions = res;

          }
        });
    }
  }


  // console.log(this.activatedRoute.snapshot.params['key']);


}

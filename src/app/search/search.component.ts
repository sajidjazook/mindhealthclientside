import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  editing = {};
  rows = [];
  temp = [];
  selected = [];
  allFunctions = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  key = '';

  closeResult: string;

  constructor(private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content, type, modalDimension) {
    if (modalDimension === 'sm' && type === 'modal_mini') {
      this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else if (modalDimension === '' && type === 'Notification') {
      this.modalService.open(content, { windowClass: 'modal-danger', centered: true }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else {
      this.modalService.open(content, { centered: true }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  searchDiscussion() {
    if (this.key != '') {
      this.router.navigate([`/result/${this.key}`])
    }
  }

  updateKey(event) {

    this.key = event.target.value;

  }

  // updateFilter(event) {
  //   const val = event.target.value.toLowerCase();
  //   console.log(val);
  //   const tempResult = this.temp.filter(function (d) {
  //     return d.name.toLowerCase().indexOf(val) !== -1 || !val;
  //   });
  //   this.rows = tempResult;

  // }

  onEnter(e) {
    const val = e.target.value;
    // console.log(val);
    if (val != '') {
      this.router.navigate([`/result/${val}`])
    }
  }

  // onSubmit(searchKey) {
  //   console.log(searchKey.value)
  //   // if(searchKey.target.value!=''){
  //   //   this.router.navigate([`/result/${e.target.value}` ]);
  //   // }
  // }
}

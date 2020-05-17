import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NotesService } from 'src/services/notes.service';
import Chatkit from '@pusher/chatkit-client';
import axios from 'axios';

@Component({
  selector: 'app-my-discussions',
  templateUrl: './my-discussions.component.html',
  styleUrls: ['./my-discussions.component.css']
})
export class MyDiscussionsComponent implements OnInit {
  closeResult: string;
  discussionFormGroup: FormGroup;
  creationIsClicked = false;
  documents = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, public afAuth: AngularFireAuth, private modalService: NgbModal,
    private formBuilder: FormBuilder, private notesService: NotesService
  ) {
  }

  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.params['id']);
    try {
      this.buildDiscussionForm();
    } catch (er) {
    }
    if (localStorage.getItem("user") != null) {
      const user = JSON.parse(localStorage.getItem("user"));
      this.notesService.getDiscussionsByUserId(user.uid).subscribe(data => {
        console.log(data)
        this.documents = data.reverse();
      })
    }
    
  }

  buildDiscussionForm() {
    this.discussionFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required]
    })
  }

  expandCreate() {
    this.creationIsClicked = !this.creationIsClicked;
  }

  isLoggedIn() {
    if (localStorage.getItem("user") != null) {
      return true;
    } else {
      return false;
    }
  }

  async submitDiscussion() {
    this.creationIsClicked = false;

    const discussion = this.discussionFormGroup.value;
    var arr = discussion.category.split(",");
    discussion.category = arr;

    try {
      if (localStorage.getItem("user") != null) {
        const user = JSON.parse(localStorage.getItem("user"));
        discussion.userId = user.uid;
        discussion.userName = user.displayName;
      }
    } catch (err) {
    }

    var array = [];
    array.push({
      userName: discussion.userName,
      userId: discussion.userId
    })
    discussion.participants = array;

    const tokenProvider = new Chatkit.TokenProvider({
      url: 'http://localhost:7000/api/authenticate'
    });

    const chatManager = new Chatkit.ChatManager({
      instanceLocator: 'v1:us1:8d77c95d-e14a-4c7b-a24a-294407109a39',
      userId: discussion.userId,
      tokenProvider
    });

    chatManager
      .connect()
      .then(currentUser => {
        // this.state.item.email
        var arr = []
        arr.push(discussion.userId)
        currentUser.createRoom({
          name: discussion.name,
          private: false,
          addUserIds: arr
        }).then(room => {
          console.log(`Created room called ${room.name}`)
          console.log(room.id)
          discussion.roomId = room.id;
          discussion.roomName = room.name;



          this.notesService.addDiscussion(discussion).subscribe(data => {
            console.log(data)
            this.notesService.getDiscussions().subscribe(data => {
              this.documents = data.reverse();
            })
          })
        }).catch(err => {
          console.log(`Error creating room ${err}`)
        })
      })
      .catch(error => console.error('error', error))



  }
  submit(val) {
    console.log(val);
    this.router.navigate([`/discussion/${val}`])
  }

}

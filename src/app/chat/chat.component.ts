import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from 'src/services/notes.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DiscussionComponent } from '../discussion/discussion.component';
import axios from 'axios';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public title = "";
  urls = [];
  notesFormGroup: FormGroup;
  public roomId;
  documents = [];
  public subtitle = "";
  public participants = [];
  public creatorName;
  public likes = 0;
  public dislikes = 0;

  messages = [];
  users = [];
  // currentUser: any;
  userId = '';
  userDetails = {};
  showChat = false;
  userName = '';

  _username: string = '';
  get username(): string {
    return this._username;
  }
  set username(value: string) {
    this._username = value;
  }

  _message: string = '';
  get message(): string {
    return this._message;
  }
  set message(value: string) {
    this._message = value;
  }

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private notesService: NotesService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params['key']);
    this.notesService.getDiscussionById(this.activatedRoute.snapshot.params['key'])
      .subscribe((res) => {
        this.title = res.name;
        this.subtitle = res.description;
        this.roomId = res.roomId;
        this.creatorName = res.userName;
        this.participants = res.participants;


        this.likes = res.likes;
        this.dislikes = res.dislikes;
        ;

        console.log(res.participants)
        this.participants.forEach((element) => {
          // console.log(element)
          this.userDetails[element.userId] = { name: element.userName }
          // console.log(this.userDetails)
          if (element.userId == this.userId) {
            this.showChat = true;
            console.log("found")
          }
        })

      });

    if (localStorage.getItem("user") != null) {
      const user = JSON.parse(localStorage.getItem("user"));
      this.userId = user.uid;
      this.userName = user.displayName;

    }
    this.notesService.getNotes(this.activatedRoute.snapshot.params['key'])
      .subscribe((res) => {
        this.documents = res.reverse();
      });
    try {
      this.buildDiscussionForm();
    } catch (er) {
    }

  }

  buildDiscussionForm() {
    this.notesFormGroup = this.formBuilder.group({
      noteDescription: ['', Validators.required],
    })
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.onload = (event: any) => {
          console.log(event.target.result);
          this.urls.push(event.target.result);
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
    console.log(this.urls)
  }

  joinRoom() {

    const postBody = {
      id: this.activatedRoute.snapshot.params['key'],
      participant: {
        userName: this.userName,
        userId: this.userId
      }
    }
    this.notesService.addDiscussionParticipant(postBody).subscribe(data => {
      console.log(data)
      this.notesService.getDiscussionById(this.activatedRoute.snapshot.params['key'])
        .subscribe((res) => {
          this.participants = res.participants;
          // console.log(res.participants)
          this.participants.forEach((element) => {
            // console.log(element)

            this.userDetails[element.userId] = { name: element.userName }

            if (element.userId == this.userId) {
              this.showChat = true;
              console.log("found")
            }
          });

          // this.users = this.currentUser.users;

        });
    })

  }

  leaveRoom() {

    const postBody = {
      id: this.activatedRoute.snapshot.params['key'],
      participant: {
        userName: this.userName,
        userId: this.userId
      }
    }
    this.notesService.removeDiscussionParticipant(postBody).subscribe(data => {
      console.log(data)
      this.notesService.getDiscussionById(this.activatedRoute.snapshot.params['key'])
        .subscribe((res) => {
          this.participants = res.participants;
          // console.log(res.participants)
          this.participants.forEach((element) => {

            this.userDetails[element.userId] = { name: element.userName }

            if (element.userId == this.userId) {
              this.showChat = true;
              console.log("found")
            }

            this.showChat = false;

          })

        });
    })


  }

  submitNote() {
    const note = this.notesFormGroup.value;
    note.images = this.urls
    if (localStorage.getItem("user") != null) {
      const user = JSON.parse(localStorage.getItem("user"));
      note.userId = user.uid;
      note.userName = user.displayName;
      alert(" Document Succesfully submitted");
      location.reload();
    }
    note.discussionId = this.activatedRoute.snapshot.params['key']
    this.notesService.addNote(note)
      .subscribe((res) => {
        this.notesService.getNotes(this.activatedRoute.snapshot.params['key'])
          .subscribe((res) => {
            this.documents = res.reverse();
          });
      });
  }

  sendMessage() {

  }

}

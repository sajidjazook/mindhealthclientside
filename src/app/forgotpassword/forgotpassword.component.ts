import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
forgotPasswordFormGroup: FormGroup;
  constructor(public afAuth: AngularFireAuth,
    private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    try {
      this.buildLoginForm();
    } catch (er) {
    }
  }

  buildLoginForm() {
    this.forgotPasswordFormGroup = this.formBuilder.group({
      email: ['', Validators.required]
    })
  }

  sendLink(){
    const form = this.forgotPasswordFormGroup.value;
    this.afAuth.auth.sendPasswordResetEmail(form["email"]).then(response => {
      console.log(response)
    }).catch(err => { console.log(err) });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  emailForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }


  emailsMatchValidator(form: FormGroup) {
    return
  }
  ngOnInit() {

    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      confirm: ['', [Validators.required, Validators.email]],
      //name: ['', [Validators.required, Validators.name]],
    }, {
      validator: (form: FormGroup) => { return form.get('email').value !== form.get('confirm').value ? { emailMismatch: true } : null }
    }
    );
  }
  get f() { return this.emailForm.controls; }
  get isEmailMismatch() { return this.emailForm.getError('emailMismatch')}
  submit() {
    // console.log('@@@@@@@@@@@@@@@')
    // // function myFunction() {
    //   console.log('@@@@@@@')
    //   Email.send({
    //     Host: "smtp.elasticemail.com",
    //     Username: "emailchecker011@gmail.com",
    //     Password: "1361A500E21D9B1C8D9964581F9C369CB7C2",
    //     To: 'sajidworksanje@gmail.com',
    //     From: "emailchecker011@gmail.com",
    //     Subject: "This is the subject",
    //     Body: "And this is the body"
    //   }).then(
    //     message => alert(message)
    //   );
    // }

  }
  onSubmit() {
    this.submitted = true;
    if(this.emailForm.invalid) { 
      return;
    } else {
      alert("Please upload your Document file to validate your sobriety!");
      location.reload();
      console.log(JSON.stringify(this.emailForm.value));
      // alert("Thank you for reaching to us. We will get back to you shortly!");
      // location.reload();
    }
}
  contact() {

    alert("Please enter all fields!");
    location.reload();

  }
}

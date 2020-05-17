import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { redirectLoggedInTo } from '@angular/fire/auth-guard';
import { RouterExtService } from 'src/services/router-ext.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  focus;
  focus1;
  public warning = true;

  constructor(public afAuth: AngularFireAuth, private router: Router,
    private routerService: RouterExtService
    , private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    try {
      this.buildLoginForm();
    } catch (er) {
    }

  }

  buildLoginForm() {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false]
    })
  }

  googleLogin() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(user => {
      console.log(user)
      const referrer = this.routerService.getPreviousUrl();
      console.log(referrer)
      this.router.navigate([referrer]);
      localStorage.setItem("user", JSON.stringify(user.user));
    }).catch(err => { console.log(err) });
  }

  login() {
    const user = this.loginFormGroup.value;
    console.log(user)
    this.afAuth.auth.signInWithEmailAndPassword(user["email"], user["password"]).then(user => {
      console.log(user);
      const referrer = this.routerService.getPreviousUrl();
      console.log(referrer)

      if(referrer === "/login" || referrer === "/home" || referrer === "/register"){
        this.router.navigate(['/user-profile'])
        alert("Successfully logged in")
      }else{
        this.router.navigate([referrer]);
      }
      
      localStorage.setItem("user", JSON.stringify(user.user));
    }).catch(err => { 
      console.log(err) 
      alert("No account found. Please register.")
    })
  }

  logout() {
    this.afAuth.auth.signOut();
    localStorage.setItem("user", null);
  }

}

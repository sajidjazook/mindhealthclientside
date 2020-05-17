import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { ModuleComponent } from './module/module.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { SidebarModule } from 'ng-sidebar';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AngularFireAuthGuard,canActivate , hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { DiscussionComponent } from './discussion/discussion.component';
import { NotesComponent } from './notes/notes.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NotesService } from 'src/services/notes.service';
import { ClickOutsideModule } from 'ng-click-outside';
import {HttpClientModule} from "@angular/common/http";
import { ChatComponent } from './chat/chat.component';
import { UsersService } from 'src/services/users.service';
import { RouterExtService } from 'src/services/router-ext.service';
import { ToastModule } from '@syncfusion/ej2-angular-notifications';
import { MyDiscussionsComponent } from './my-discussions/my-discussions.component';
import { ToastComponent } from './toast/toast.component';
import { OcruploadComponent } from './ocrupload/ocrupload.component';
import { QuizComponent } from './quiz/quiz.component';
import { AddictionComponent } from './addiction/addiction.component';
import { QuizquestionsComponent } from './quizquestions/quizquestions.component';
import { StartquizComponent } from './startquiz/startquiz.component';
import { AlcohoquizComponent } from './alcohoquiz/alcohoquiz.component';
import { DrugquizComponent } from './drugquiz/drugquiz.component';
import { ContactComponent } from './contact/contact.component';
import { VirtualassistComponent } from './virtualassist/virtualassist.component';
import { CongratulationsComponent } from './congratulations/congratulations.component';

//import { ComponentsComponent } from './components/components.component';
//import { QuestionComponent } from './components/question/question.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    ModuleComponent,
    SearchComponent,
    ResultsComponent,
    ForgotpasswordComponent,
    DiscussionComponent,
    NotesComponent,
    SidebarComponent,
    ChatComponent,
    MyDiscussionsComponent,
    ToastComponent,
    OcruploadComponent,
    QuizComponent,
    AddictionComponent,
    QuizquestionsComponent,
    StartquizComponent,
    AlcohoquizComponent,
    DrugquizComponent,
    ContactComponent,
    VirtualassistComponent,
    CongratulationsComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    SidebarModule.forRoot(),
        NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    AngularFireModule.initializeApp(environment.firebase, 'edvantage-client'),
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule,
    HttpClientModule,
    ClickOutsideModule,
    ToastModule
  ],
  providers: [
    AngularFireAuthGuard,
    NotesService,
    UsersService,
    RouterExtService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

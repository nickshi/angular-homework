import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginComponent } from './components/login/login.component';
import { DoubleButtonsComponent } from './components/double-buttons/double-buttons.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CreateEventPageComponent } from './pages/create-event-page/create-event-page.component';
import { DateTimePickerModule } from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EventCardComponent } from './components/event-card/event-card.component';
import { EventCardListComponent } from './components/event-card-list/event-card-list.component';
import { EventDetailsPageComponent } from './pages/event-details-page/event-details-page.component';
import { AuthService } from './services/auth-service.service';
import { EventService } from './services/event-service.service';
import { ChatService } from './services/chat-service.service';
import { MovieService } from './services/movie-service.service';
import { AuthGuard } from './services/auth-guard.service';
import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileEventCardComponent } from './components/profile-event-card/profile-event-card.component';
import { ChatboxPageComponent } from './pages/chatbox-page/chatbox-page.component';
import { ChatboxComponent } from './components/chatbox/chatbox.component';
import { SummaryPagesComponent } from './pages/summary-pages/summary-pages.component';
import { MovieDetailPageComponent } from './pages/movie-detail-page/movie-detail-page.component';
const appRoutes: Routes = [
  { 
    path: 'login', 
    component: LoginPageComponent
  },
  { 
    path: '',
    component: HomePageComponent
  },
  { 
    path: 'signup',
    component: SignUpPageComponent
  },
  { 
    path: 'profile',
    component: UserProfilePageComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'summary',
    component: SummaryPagesComponent,
    canActivate:[AuthGuard]
  },
  { 
    path: 'chatbox',
    component: ChatboxPageComponent,
    canActivate:[AuthGuard]
  },
  { 
    path: 'detail/:id',
    component: MovieDetailPageComponent,
    canActivate:[AuthGuard]
  },
  {
    path: '**',
    component: HomePageComponent
  },
  
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    LoginComponent,
    DoubleButtonsComponent,
    SignUpPageComponent,
    HomePageComponent,
    CreateEventPageComponent,
    EventCardComponent,
    EventCardListComponent,
    EventDetailsPageComponent,
    UserProfilePageComponent,
    ProfileEventCardComponent,
    ChatboxPageComponent,
    ChatboxComponent,
    SummaryPagesComponent,
    MovieDetailPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DateTimePickerModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    NgbModule.forRoot()
  ],
  providers: [
    AuthService,
    EventService,
    ChatService,
    MovieService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

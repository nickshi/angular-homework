import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { ChatboxComponent } from './components/chatbox/chatbox.component';
import { DoubleButtonsComponent } from './components/double-buttons/double-buttons.component';
import { ChatService } from './services/chat-service.service';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { ChatBoxPageComponent } from './containers/chat-box-page/chat-box-page.component';

const appRoutes: Routes = [
  { 
    path: 'login', 
    component: LoginPageComponent
  },
  { 
    path: '',
    component: LoginPageComponent
  },
  { 
    path: 'chatbox',
    component: ChatBoxPageComponent
  },
  {
    path: '**',
    component: LoginPageComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ChatboxComponent,
    DoubleButtonsComponent,
    LoginPageComponent,
    ChatBoxPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }

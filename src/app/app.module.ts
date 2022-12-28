import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoComponent } from './flows/usertransactions/to-do/to-do.component';
import { CreateComponent } from './flows/usertransactions/create/create.component';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './flows/usertransactions/detail/detail.component';
import { ButtonComponent } from './components/button/button.component';
import { LoginComponent } from './flows/usertransactions/login/login.component';
import { RegisterComponent } from './flows/usertransactions/register/register.component';
import { AdminPanelComponent } from './flows/admintransactions/admin-panel/admin-panel.component';
import { EditorPanelComponent } from './flows/editortransactions/editor-panel/editor-panel.component';
import { ForgotmypasswordComponent } from './flows/usertransactions/forgotmypassword/forgotmypassword.component';


@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    CreateComponent,
    DetailComponent,
    ButtonComponent,
    LoginComponent,
    RegisterComponent,
    AdminPanelComponent,
    EditorPanelComponent,
    ForgotmypasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoComponent } from './flows/usertransactions/to-do/to-do.component';
import { CreateComponent } from './flows/usertransactions/create/create.component';
import { DetailComponent } from './flows/usertransactions/detail/detail.component';
import { LoginComponent } from './flows/usertransactions/login/login.component';
import { RegisterComponent } from './flows/usertransactions/register/register.component';
import { AdminPanelComponent } from './flows/admintransactions/admin-panel/admin-panel.component';
import { EditorPanelComponent } from './flows/editortransactions/editor-panel/editor-panel.component';
import { ForgotmypasswordComponent } from './flows/usertransactions/forgotmypassword/forgotmypassword.component';

const routes: Routes = [
{path: '', component: LoginComponent},
{path: 'toDo/:id', component: ToDoComponent},
{path: 'register-user', component: RegisterComponent},
{path: 'create/:id', component: CreateComponent},
{path: 'toDo/:id/details/:detailId',component: DetailComponent},
{path: 'admin-panel/:id',component: AdminPanelComponent},
{path: 'editor-panel/:id',component: EditorPanelComponent},
{path: 'forgot-password',component: ForgotmypasswordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

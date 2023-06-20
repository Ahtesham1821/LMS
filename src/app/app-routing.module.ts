import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentLoginComponent } from './student-login/student-login.component';
import { TeacherloginComponent } from './teacherlogin/teacherlogin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

const routes: Routes = [
  {
    path: 'Studentlogin',
    component: StudentLoginComponent
  },
  {
    path: 'TeacherLogin',
    component: TeacherloginComponent
  },
  {
    path: 'AdminLogin',
    component: AdminLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

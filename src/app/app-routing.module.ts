import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { RolComponent } from './components/rol/rol.component';

const routes: Routes = [
  {
    path: "", component: LoginComponent,
  }, {
    path: "main", component: MainComponent,
    children: [
      { path: "roles", component: RolComponent }
    ]
  },
  {
    path: "**", redirectTo: ""
  }
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

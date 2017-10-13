import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ViewTodoComponent } from './view-todo/view-todo.component';
import { TodoComponent } from './todo/todo.component';
// import { AppRoutingModule } from './app.routing';
import { RouterModule, Routes } from '@angular/router';
import {DataTableModule} from "angular2-datatable";
import {HttpClientModule} from '@angular/common/http';
import { AppServiceService } from "./app-service.service";
const appRoutes: Routes = [
  
  { path: '', component: TodoComponent },
  { path: 'view', component: ViewTodoComponent },
];

@NgModule ({
   imports: [ BrowserModule,DataTableModule,HttpClientModule,
   RouterModule.forRoot(appRoutes)],
   providers:[AppServiceService],
   declarations: [ AppComponent,TodoComponent,ViewTodoComponent],
   bootstrap: [ AppComponent ]
})
export class AppModule { }
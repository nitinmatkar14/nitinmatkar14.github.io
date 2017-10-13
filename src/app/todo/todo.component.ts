import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AppServiceService } from "../app-service.service";
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit {
  data;
  constructor(private http: HttpClient,public AppServiceService:AppServiceService) { }
  ngOnInit() {
  this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {
      // Read the result field from the JSON response.
      this.data = data;
    });    
  }
  viewUser(id,name){
  this.AppServiceService.userId=id;
  this.AppServiceService.uname=name;
  }

}

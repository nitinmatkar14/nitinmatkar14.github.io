import { Component, OnInit } from '@angular/core';
import { AppServiceService } from "../app-service.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html'
})
export class ViewTodoComponent implements OnInit {
  public uid;
  public uname;
  public data;
  constructor(private http: HttpClient,public AppServiceService:AppServiceService) { }

  ngOnInit() {
    this.uid=this.AppServiceService.userId;
    this.uname=this.AppServiceService.uname;
    console.log("UID="+this.uid);
  }
  ngAfterViewInit(){
    this.http.get(' https://jsonplaceholder.typicode.com/todos?userId='+this.uid).subscribe(data => {
      // Read the result field from the JSON response.
      this.data = data;
      console.log(this.data);
    });  
  }

}

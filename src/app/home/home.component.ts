import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from "../blog-http.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allBlogs: any;
  errorMessage: any;
 

  constructor(private toastr: ToastrService,private blogHttpService:BlogHttpService) {
   

   }

  ngOnInit() {

     this.blogHttpService.getAllBlogs().subscribe(
      
              data => {
                console.log(data);
                this.allBlogs = data["data"];
                return this.allBlogs;
              },
              error =>{
                console.log("some error occured");
                console.log(error.errorMessage)
              }
            );
  }

}

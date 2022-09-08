import { Component, OnInit } from '@angular/core';
import { UserModal } from '../user';
import { UserService } from '../user.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
   providers:[UserService]
})
export class UserComponent implements OnInit {

  showDetails: boolean = false;
  Age : boolean = false
  users : any;

  constructor(private userService : UserService) { 
      userService.users().subscribe((data)=>{
        this.users = data
        // console.warn("data",data)
      });
     
  }

  UserFormData(data:any) {
    console.warn(data)
  }

 
ngOnInit(): void {
       
}
  toggleDetails():void {
       this.showDetails = !this.showDetails;
       
  }

  
}

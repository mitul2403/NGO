<<<<<<< HEAD
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators,FormsModule} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {LoginService} from '../services/login.service'
import { MatIconModule } from '@angular/material';
=======
import { Component, OnInit } from '@angular/core';

>>>>>>> fa920c35fefcdcce94e346e9b67fb86545aaac4f
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
 
    users : any= [];
  constructor(private loginService:LoginService ) { }

  
  username : string ="mitul";
  password : string= "mitul";
  // id:any= '5bbcec8551862a3bbc72a9e0';
  login() : void {
    
    // console.log(this.users[0].Last_Name);
    if(this.username == "mitul" && this.password == "patel" ){
       console.log("login by admin");
    }else {
      alert("Invalid credentials");
    }
  }
  ngOnInit() {

    this.loginService.getuserbyusername().subscribe((data)=>{this.users=data; console.log(data)}
      
    
    
    )
  }

}

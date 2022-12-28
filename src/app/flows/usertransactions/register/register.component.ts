import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private http:HttpClient,private router: Router) { }

  ngOnInit(): void {
  }
  registerUser(user: {userEmail:string,userPassword: string, userConfirmPassword: string,userRole?: string}){
    user.userRole="User";
    if(user.userPassword==user.userConfirmPassword){
      this.http.get("http://localhost:8081/api/user/"+user.userEmail+ "/" +user.userPassword).subscribe((res: any) => {
      
      if(res.recordset[0]==undefined){
        this.http.post("http://localhost:8081/api/user",user).subscribe()
        alert("User Created.")
        this.router.navigate([""])
      }else{
        alert("User found with this email")
      }

      }) 
    }else{
      alert("User Password And Confirm Password Doesn't Match!")
    }
    
  }
}

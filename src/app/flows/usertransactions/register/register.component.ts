import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { user } from '../../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private http:HttpClient,private router: Router) { }
  showEmailVerificationMenu=false;
  verificationCode = undefined;
  userEmail = "";
  userObject={};
  ngOnInit(): void {
  }
  registerUser(user: {userEmail:string,userPassword: string, userConfirmPassword: string,userRole?: string}){
    user.userRole="User";
    if(user.userPassword==user.userConfirmPassword){
      if(user.userPassword.length>6 && user.userPassword.length<24){

        this.http.get("http://localhost:8081/api/user/"+user.userEmail).subscribe((res: any) => {
        console.log(res.recordset[0])
        if(res.recordset[0]==undefined){
          this.http.get("http://localhost:8081/api/mail/"+user.userEmail).subscribe((res: any) => {
            if(res!=undefined){
              alert("Verification Code Sent To Your Email")
              this.userEmail = user.userEmail;
              this.userObject = user;
              this.showEmailVerificationMenu = true;
              this.verificationCode=res;
          
          }
        }) 
        
      }else{
        alert("User found with this email")
      }

      }) 

      }else{
        alert("Password Length Must Between Of 6 And 24 ")
      }
      
  }else{
      alert("User Password And Confirm Password Doesn't Match!")
  }
    
  }

  matchVerificationCode(userVerificationCode:any){
    if(userVerificationCode.VerificationCode==this.verificationCode){
      this.http.post("http://localhost:8081/api/user",this.userObject).subscribe()
      alert("User Created.")
      this.showEmailVerificationMenu = false;
      this.router.navigate([""])
    }else{
        alert("Your Verification Code Doesn't Match!")
    }
    
  }
}

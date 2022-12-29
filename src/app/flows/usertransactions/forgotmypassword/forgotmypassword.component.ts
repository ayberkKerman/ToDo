import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';





@Component({
  selector: 'app-forgotmypassword',
  templateUrl: './forgotmypassword.component.html',
  styleUrls: ['./forgotmypassword.component.scss']
})
export class ForgotmypasswordComponent implements OnInit {

  constructor(private http:HttpClient,private router: Router) { }
  showEmailVerificationMenu=false;
  showPasswordChangeMenu=false;
  verificationCode = undefined;
  userEmail = "";
  ngOnInit(): void {
  }

  forgotPassword(user: {userEmail:string}){
    this.http.get("http://localhost:8081/api/mail/"+user.userEmail).subscribe((res: any) => {
      if(res!=undefined){
        alert("Verification Code Sent To Your Email")
        this.userEmail = user.userEmail;
        this.showEmailVerificationMenu = true;
        this.verificationCode=res;
        
      }
    }) 
  }
  matchVerificationCode(userVerificationCode:any){
    if(userVerificationCode.VerificationCode==this.verificationCode){
      alert("Succesfully!")
      this.showEmailVerificationMenu = false;
      this.showPasswordChangeMenu=true;
    }else{
        alert("Your Verification Code Doesn't Match!")
    }
    
  }

  changePassword(user: {userEmail?:string,Password:string,ConfirmPassword:string}){ 
    
    if(user.Password==user.ConfirmPassword){

      if(user.Password.length>6 && user.Password.length<24){

        user.userEmail=this.userEmail;
        this.http.put("http://localhost:8081/api/user-password",user).subscribe()
        alert("Password Changed Succesfully!")
        this.router.navigate(['']);

      }else{
        alert("Password Length Must Between Of 6 And 24 ")
      }
      
    }else{
      alert("Passwords Doesn't Match. Please Try Again!")
    }
    
  }

  
}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { user } from '../../../models/user';
import "bootstrap";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient,private router: Router) { }

  ngOnInit(): void {

  }

  checkUserExist(user: {userEmail:string,userPassword: string}){
     this.http.get("http://localhost:8081/api/user/"+user.userEmail+ "/" +user.userPassword).subscribe((res: any) => {
      if(res.recordset[0]==undefined){
        alert("User Doesn't Exists")
      }else if(res.recordset[0].UserRole=="User"){
        this.router.navigate(['toDo/'+res.recordset[0].Id]);
      }else if(res.recordset[0].UserRole=="Admin"){
        this.router.navigate(['admin-panel/'+res.recordset[0].Id]);
      }else if(res.recordset[0].UserRole=="Editor"){
        this.router.navigate(['editor-panel/'+res.recordset[0].Id]);
      }
      
   
    }) 
  }
  
    

  
  goToRegister(){
    this.router.navigate(['/register-user']);  
  }
}

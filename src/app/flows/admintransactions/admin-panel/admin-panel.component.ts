import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { user } from '../../../models/user';
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  idUser:any;
  constructor(private http:HttpClient,private router: Router,private _Activatedroute:ActivatedRoute) {this.idUser=this._Activatedroute.snapshot.paramMap.get("id"); }
  
  editorList:user[]=[];
  ngOnInit(): void {

    this.getEditorList().subscribe((data:any)=>{
      this.editorList =  data.recordset;
    })
    
  }
  registerEditor(user: {userEmail:string,userPassword: string, userConfirmPassword: string,userRole?: string}){
    user.userRole="Editor";
    if(user.userPassword==user.userConfirmPassword){
      this.http.get("http://localhost:8081/api/user/"+user.userEmail+ "/" +user.userPassword).subscribe((res: any) => {
      
      if(res.recordset[0]==undefined){
        this.http.post("http://localhost:8081/api/user",user).subscribe()
        alert("Editor Created.")
        window.location.reload();
      }else{
        alert("User found with this email")
      }

      }) 
    }else{
      alert("User Password And Confirm Password Doesn't Match!")
    }
    
  }


  getEditorList(){
    return this.http.get("http://localhost:8081/api/editor")
  }
  
  deleteEditor(id:number){

    if (confirm('Are you sure you want to delete?')){
      this.http.delete("http://localhost:8081/api/user/"+id).subscribe()
      alert("Delete Succesful")
      window.location.reload();
    }else{

    }
  
  }
}

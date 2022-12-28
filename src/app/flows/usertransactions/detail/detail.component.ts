import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { toDo } from '../../../models/toDo';
import { ActivatedRoute, Router } from '@angular/router';
import "bootstrap";
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  idUser:any;
  id:any;
  constructor(private http:HttpClient,private _Activatedroute:ActivatedRoute,private router: Router) { 
    this.id=this._Activatedroute.snapshot.paramMap.get("detailId");
    this.idUser=this._Activatedroute.snapshot.paramMap.get("id");
  }
  toDoDetails:toDo=new toDo;
  

  ngOnInit(): void {
    
    this.getToDo(this.id).subscribe((data:any)=>{
      this.toDoDetails = data.recordset[0];
      console.log(this.toDoDetails)
    })
    
    
  }
  
  getToDo(id:number){
    
    return this.http.get<toDo>("http://localhost:8081/api/to-do/detail/"+id)
  }
  goBack(){
    this.router.navigate(['/toDo/'+this.idUser]);  
  }
  changeTheIsCompleted(id:number,e:any){
    
    this.toDoDetails.IsCompleted=e.target.checked;
    let params={
      id:this.toDoDetails.Id,
      toDo: this.toDoDetails
    }
    return this.http.put("http://localhost:8081/api/to-does/change-Is-Completed",params).subscribe()
   
  }

  changeTheToDo(toDo: {title:string,isCompleted: boolean,detail: string, priority: string,createDate:Date}){
    
    toDo.createDate= this.toDoDetails.CreateDate;
    if(toDo.title==""){
      toDo.title=this.toDoDetails.Title
      alert("Your old title has been set to your new title.")
    }
    if(toDo.detail=="")
    {
      
    }
    else{
      this.toDoDetails.Detail=toDo.detail
    }

    if(toDo.priority=="")
    {
      
    }
    else{
      this.toDoDetails.Priority=toDo.priority
    }
    
    this.toDoDetails.Title = toDo.title
    
    let params={
      id:this.toDoDetails.Id,
      toDo: this.toDoDetails
    }
    this.http.put("http://localhost:8081/api/to-does/change",params).subscribe();
    alert("Change Succesful")
  }

  deleteTheToDo(toDo:toDo){
    if (confirm('Are you sure you want to delete?')){
      this.http.delete("http://localhost:8081/api/delete/"+toDo.Id).subscribe()
      alert("Delete Succesful")
      this.router.navigate(['/toDo/'+toDo.UserId]);
    }else{

    }
  }

}

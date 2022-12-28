import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { toDo } from '../../../models/toDo';
import "bootstrap";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  
  
  constructor(private http:HttpClient,private router: Router, private route: ActivatedRoute) { }

  idUser: number=11111111;
  date = new Date()
  ngOnInit(): void {
    this.route.params.subscribe(id=>{
      this.idUser= Number(id['id'])
    })
  }
  goBack(){
    this.router.navigate(['/toDo/'+this.idUser]);  
  }
  onToDoCreate(toDo: {title:string,isCompleted: boolean,detail: string, priority: string,createDate:Date,userId:number}){
    toDo.userId=this.idUser;
    toDo.createDate= this.date;
    if(toDo.title==""){
      alert("Title Cant Be Empty")
    }
    else{
      if(toDo.isCompleted==true){
        
      }
      else{
        toDo.isCompleted=false
      }
      
      this.http.post("http://localhost:8081/Create",toDo).subscribe();
      alert("Add Succesful")
      this.router.navigate(['/toDo/'+this.idUser]);
    }
    
  }
 
}

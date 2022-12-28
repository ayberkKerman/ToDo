import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toDo } from '../../../models/toDo';
import { Router } from '@angular/router';
import "bootstrap";
import { ActivatedRoute } from '@angular/router';
import { __values } from 'tslib';
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {
  
  constructor(private http:HttpClient,private router: Router, private route: ActivatedRoute) {}

  idUser: number=11111111;
  toDoList:toDo[]=[];
  ngOnInit(): void {
    
    
    this.route.params.subscribe(id=>{
      this.idUser= Number(id['id'])
      
      this.getToDoList(Number(id['id'])).subscribe((data:any)=>{
        this.toDoList =  data.recordset;

      })
    })

  }

  gotoCreate(){
    this.router.navigate(['/create/'+this.idUser]);  
  }

  changeTheIsCompleted(id:number,e:any){
    var index=0;
    var counter=0;
    
    for(var toDo of this.toDoList){
      if(id==toDo.Id){
          index=counter;
      }
      counter++;
    }
    
    this.toDoList[index].IsCompleted=e.target.checked;
    let params={
      id:this.toDoList[index].Id,
      toDo: this.toDoList[index]
    }
    return this.http.put("http://localhost:8081/api/to-does/change-Is-Completed",params).subscribe()
  }
  
  getToDoList(id:number){
    
    return this.http.get<toDo[]>("http://localhost:8081/api/to-does/" + id)
  }

}

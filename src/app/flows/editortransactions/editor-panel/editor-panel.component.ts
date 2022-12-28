import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { user } from '../../../models/user';

@Component({
  selector: 'app-editor-panel',
  templateUrl: './editor-panel.component.html',
  styleUrls: ['./editor-panel.component.scss']
})
export class EditorPanelComponent implements OnInit {
  idUser:any;
  constructor(private http:HttpClient,private router: Router,private _Activatedroute:ActivatedRoute) {this.idUser=this._Activatedroute.snapshot.paramMap.get("id"); }
  userList:user[]=[];
  ngOnInit(): void {

    this.getUserList().subscribe((data:any)=>{
      this.userList =  data.recordset;
    })
  }

  getUserList(){
    return this.http.get("http://localhost:8081/api/user")
  }

  deleteUser(id:number){

    if (confirm('Are you sure you want to delete?')){
      this.http.delete("http://localhost:8081/api/user/"+id).subscribe()
      alert("Delete Succesful")
      window.location.reload();
    }else{

    }
  
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServicesService } from '../admin-services.service';
import { Admin } from '../Admin';

@Component({
  selector: 'app-viewadmin',
  templateUrl: './viewadmin.component.html',
  styleUrls: ['./viewadmin.component.css']
})
export class ViewadminComponent {

  users: any[] | undefined
  //url: string = "http://localhost:8080/";

  constructor(private service: AdminServicesService, private router: Router) { 
   
  }

  ngOnInit(): void {
    this.service.getUsers().subscribe(data => {
      this.users = data;
    })
   
  }

  deleteUser(cin: number){
    this.service.deleteUser(cin).subscribe(data => {
      this.users = this.users?.filter(user => user.cin !== cin);
    })
    
      setTimeout(()=>{
        window.location.reload();
      }, 100);
  
  }

  updateUser(id: number){
    this.router.navigate(['update', id]);
  }

 

}

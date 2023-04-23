
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServicesService } from '../admin-services.service';
import { Admin } from '../Admin';

@Component({
  selector: 'app-updateadmin',
  templateUrl: './updateadmin.component.html',
  styleUrls: ['./updateadmin.component.css']
})
export class UpdateadminComponent {
  user?: Admin
  data: any


  constructor(private service: AdminServicesService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let cin = this.route.snapshot.params['cin'];
    this.service.getUserById(cin).subscribe(data => {
      this.user = <Admin> data
      console.log(this.user)
    })
  }

  form = new FormGroup({
    cin: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  submit(){
    this.data = this.form.value
    console.log(this.data)
    this.service.updateUser(this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['admins']);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Admin } from './Admin';

@Injectable({
  providedIn: 'root'
})
export class AdminServicesService {

  private url = "http://localhost:8080/admin/";

  constructor(private http: HttpClient) { }

  // Add User - Create
  adduser(user: Admin){
    return this.http.post<Admin>(`${this.url}add`, user)
  }

  // Get Users - Read
  getUsers(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'getall')
  }

  // Get User by Id - Read
  getUserById(id: number): Observable<Admin>{
    return this.http.get<Admin>(`${this.url}getadminby/${id}`)
  }

  // Update User - Update
  updateUser(user: Admin): Observable<any>{
    return this.http.put<any>(`${this.url}update/${user.cin}`, user)
  }

  // Delete User - Delete
  deleteUser(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}delete/${id}`)
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  private url = "http://localhost:8080/subscribers/";

  constructor(private http:HttpClient) { }

  getSubscribers(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'getall')
  }

  deleteSubscriber(id): Observable<any>{
    return this.http.delete<any>(`${this.url}delete/${id}`)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { sub } from './sub';


@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  constructor(private http: HttpClient) { }

  readonly url = 'http://localhost:8080/newsletter/';


  getSubscribers(user: sub){
    return this.http.get<any[]>(this.url + 'getall')
  }


  addSubscriber(user: sub) {
    return this.http.post<sub>(`${this.url}add`, user)
  }

  /* getSubs(subData: String) {

    this.http.collection('subscribers').add(subData).then(() => {
      console.log('subscriber saved sucessfully');
    })
  } */
  checkSubs(subEmail: String) {
    return this.http.get<any[]>(this.url + 'subscribers');
  }

}

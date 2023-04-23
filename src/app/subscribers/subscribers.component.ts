import { Component, OnInit } from '@angular/core';
import { SubscribersService } from './subscribers.service';
import { sub } from '../subscription-form/sub';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css']
})
export class SubscribersComponent implements OnInit{

  subscribersArray: Array<sub>;

  constructor(private subService: SubscribersService){

  }
  ngOnInit(): void {
    this.subService.getSubscribers().subscribe(val=>{
      this.subscribersArray=val;
    })
  }

  onDelete(id){
    this.subService.deleteSubscriber(id);
  }
}

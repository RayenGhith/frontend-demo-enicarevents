import { Component, OnInit } from '@angular/core';
import { sub } from './sub';
import { SubscribersService } from './subscribers.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit {

  isEmailError: boolean = false;
  isSubscribed: boolean = false;

  constructor(private subService: SubscribersService) { }

  ngOnInit(): void {

  }
  onSubmit(formVal) {
    const subData: sub = {
      id: formVal.id,
      name: formVal.name,
      email: formVal.email
    }

    this.subService.checkSubs(subData.email).subscribe(val => {
      console.log(val);

    if (!(val && val.length > 0)) {
      this.subService.getSubscribers(subData);
      this.isSubscribed = true;
    }
    else {
      this.isEmailError = true;
    }
   })
  }


}

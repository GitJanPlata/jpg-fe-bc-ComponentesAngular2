import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contactList: any[] = [];

  onFormSubmit(data: any) {
    this.contactList.push(data);
  }
}
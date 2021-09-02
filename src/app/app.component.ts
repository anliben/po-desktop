import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';
import { invoke } from '@tauri-apps/api/tauri'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  constructor(){
    this.ola()
  }
  ola (){
      invoke('my_custom_command')
  }


  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', icon: 'po-icon po-icon-home', action: this.onClick.bind(this) }
  ];
  avatar = 'https://i.ibb.co/F8g9gqH/meu-logo.png';

  contact = {
    name: 'Mr. Dev Desktop PO',
    email: 'anliben.yayoi@gmail.com',
    phone: '98983135506'
  };

  callContact(phone: any) {
    window.open(`tel:${phone}`, '_self');
  }


  sendContact(email: any) {
    window.open(`mailto:${email}`, '_self');
  }

  formatPhoneNumber(phone:any) {
    return `(${phone.substring(0, 2)}) ${phone.substring(2, 7)}-${phone.substring(7)}`;
  }
  invokeTauriCommand(){
    invoke('my_custom_command')
  }

  private onClick() {
    alert('Clicked in menu item')
  }

}

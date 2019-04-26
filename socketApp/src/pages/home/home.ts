import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Socket } from 'ng-socket-io';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name = '';
  constructor(public navCtrl: NavController, private socket: Socket) {

  }
  joinChat() {
    this.socket.connect();
    this.socket.emit('setName', this.name);
    this.navCtrl.push('ChatRoomPage', { name: this.name });
  }

}

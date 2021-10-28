import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

import { NavController } from '@ionic/angular';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  public messages$ = this.messagesService.getMessages();

  constructor(
    private authService: AuthService,
    private messagesService: MessagesService,
    private navCtrl: NavController
  ) {}

  async logout() {
    await this.authService.signOut();
    this.navCtrl.navigateBack('/');
  }
}

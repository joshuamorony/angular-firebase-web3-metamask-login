import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public isAuthenticating = false;

  constructor(
    private authService: AuthService,
    private navCtrl: NavController
  ) {}

  login() {
    this.isAuthenticating = true;

    this.authService.signInWithMetaMask().subscribe(
      () => {
        this.isAuthenticating = false;
        this.navCtrl.navigateForward('/dashboard');
      },
      (err) => {
        console.log(err);
        this.isAuthenticating = false;
      }
    );
  }
}

import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { GooglePlus } from '@ionic-native/google-plus';
// console.log(GooglePlus, 'GooglePlus');


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{title: string, component: any}>;
  googleData = {
    accessToken: '',
    displayName: '',
    email: '',
    expires: '',
    expires_in: '',
    familyName: '',
    givenName: '',
    userId: null
  }
  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    // private googlePlus: GooglePlus
  ) {
    this.initializeApp();
    // this.login();
    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage }
    ];
  }
  // login() {
  //   let cert = this.googlePlus.getSigningCertificateFingerprint();
  //   console.log(cert, 'LOGON');
  //   this.googlePlus.login({})
  //     .then(res => {
  //       console.log(res, '======');
  //       this.googleData = res;
  //       console.log(this.googleData, 'googleData');
  //     })
  //     .catch(err => console.error(err, 'err'));
  // }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

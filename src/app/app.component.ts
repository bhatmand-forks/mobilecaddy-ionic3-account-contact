import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InitPage } from '../pages/init/init';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

// DEV STUFF
import {isDevMode} from "@angular/core";

import * as devUtils from 'mobilecaddy-utils/devUtils';
import * as syncRefresh from 'mobilecaddy-utils/syncRefresh';
import * as _ from 'underscore';

if (isDevMode()) {
  window['devUtils'] = devUtils;
  window['syncRefresh'] = syncRefresh;
  window['_'] = _;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = InitPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Accounts', component: HomePage },
      { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
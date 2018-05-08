import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public platform: Platform) {

    console.log(platform);
    console.log(platform.platforms());
    if (platform.is("cordova")) {
      console.log("is cordova");
    }

    if (platform.is("capacitor")) {
     console.log("is capacitor");
    }

    platform.ready().then((readySource) => {
      console.log('Platform ready from', readySource);
      // Platform now ready, execute any required native code
    });
  }
}

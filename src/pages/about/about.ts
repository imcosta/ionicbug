import { Component } from '@angular/core';

import { App, NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(private app : App, public navCtrl: NavController) {

  }

  pop()
  {
  	this.app.getRootNav().pop();
  }

}

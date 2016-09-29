import { Component } from '@angular/core';

import { App, NavController } from 'ionic-angular';

import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private app : App, public navCtrl: NavController) {

  }

  public push1()
  {
  	this.app.getRootNav().push(AboutPage)
  }

}

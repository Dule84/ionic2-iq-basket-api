import { Component } from '@angular/core';
import {TipsService} from "../../tips.service";
import {Tips} from "../../tips.interface";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tips: Tips[];

  constructor(public tipsService: TipsService) {

  }
  ionViewWillEnter() {
    this.tipsService.getTips()
        .subscribe(
            (tips: Tips[]) => this.tips = tips,
            (error: Response) => console.log(error)
        )
  };

}

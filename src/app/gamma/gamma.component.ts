import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
@Component({
  selector: 'app-gamma',
  templateUrl: './gamma.component.html',
  styleUrls: ['./gamma.component.css']
})
export class GammaComponent implements OnInit {
  myDiffernce : number;
  constructor(private _numberService : NumberService) { }

  //initialize your local var on initialization
  ngOnInit() {
    //this.myDiffernce = this._numberService.differnce;
    this.myDiffernce = this._numberService.getArrayDifference();
  }

  getDifference(){
    this._numberService.getArrayDifference();
  }

}

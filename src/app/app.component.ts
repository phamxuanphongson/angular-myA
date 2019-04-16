import { Component, OnInit } from '@angular/core';
import {ShareService} from '../app/share.service';

declare var controlM: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  theLink: string;
  theDuration:string;
  status:string ='pause';
  isOn: Boolean = true;
  audioTag:any;
  
  constructor(private share: ShareService){}

  ngOnInit(){
    this.share.currentLink.subscribe(link => {
      this.theLink = link;
    })

    this.share.currentDuration.subscribe(info=>{
      this.theDuration = info;
    });
  }

  controlMusic(){
    if (this.status == 'play') {
      this.status = 'pause';
    }else{
      this.status = 'play';
    }
    controlM();
  }
}

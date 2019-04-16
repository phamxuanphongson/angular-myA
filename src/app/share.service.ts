import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  private linkS = new BehaviorSubject<string>('');
  private durationTime = new BehaviorSubject<string>('');
  private turnOn = new BehaviorSubject<string>('');
  currentLink = this.linkS.asObservable();
  currentDuration = this.durationTime.asObservable();
  currentTurnOn = this.turnOn.asObservable();
  constructor() { }

  changeLink(link: string){
    this.linkS.next(link);
  }

  changeDuration(duration: string){
    this.durationTime.next(duration);
  }

  turnOnPlayer(turnOnStr: string){
    this.turnOn.next(turnOnStr);
  }
}
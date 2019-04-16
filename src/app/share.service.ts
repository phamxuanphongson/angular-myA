import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  private linkS = new BehaviorSubject<string>('');
  private durationTime = new BehaviorSubject<string>('');
  private allSongFromArtist = new BehaviorSubject<any>([]);
  currentLink = this.linkS.asObservable();
  currentDuration = this.durationTime.asObservable();
  currentAllSongFromArtis = this.allSongFromArtist.asObservable();
  constructor() { }

  changeLink(link: string){
    this.linkS.next(link);
  }

  changeDuration(duration: string){
    this.durationTime.next(duration);
  }

  changeAllSongFromArtist(obj: any){
    this.allSongFromArtist.next(obj);
  }
}
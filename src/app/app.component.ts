import { Component, OnInit } from '@angular/core';
import {ShareService} from '../app/share.service';
import { Artists } from '../app/models/artists';
import { ArtistsService } from '../app/services/artists.service';
import { Songs } from '../app/models/songs';
import { SongsService } from '../app/services/songs.service';
import { ActivatedRoute } from '@angular/router';
declare var controlM: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  allSongFromArtistApp: Songs[];
  artistID: string = '0';
  songID: string = '0';
  theLink: string;
  theDuration:string;
  status:string ='pause';
  isOn: Boolean = true;
  audioTag:any;
  theSongIDApp: number;

  // get song
  theSongID: number;
  theSongArtistID:number;
  theSongTitle: string;
  theSongImg: string;
  theSongLyrics: string;
  theSongLink: string;
  duration:string;
  
  constructor(private share: ShareService,private artistsService: ArtistsService, private route: ActivatedRoute,private songsService: SongsService){
    this.artistID = this.route.snapshot.paramMap.get('artistID');
    this.songID = this.route.snapshot.paramMap.get('songID');
  }

  ngOnInit(){
    // this.share.currentLink.subscribe(link => {
    //   this.theLink = link;
    // })

    this.share.currentDuration.subscribe(info=>{
      this.theDuration = info;
    });

    this.share.currentAllSongFromArtis.subscribe(data=>{
      this.allSongFromArtistApp = data;
    })
    this.share.currentTheSongID.subscribe(data=>{
      this.theSongIDApp = data;
    })
    this.share.currentTheSong.subscribe(data=>{
      this.theSongID = data.id;
      this.theSongArtistID = data.artistId;
      this.theSongTitle = data.title;
      this.theSongImg = data.image;
      this.theSongLyrics = data.lyrics;
      this.theSongLink = data.link_source;
    })
  }

  

  controlMusic(){
    if (this.status == 'play') {
      this.status = 'pause';
    }else{
      this.status = 'play';
    }
    controlM();
  }

  prevSong(songID){
    this.allSongFromArtistApp.forEach((el, index)=>{
      if(el.id == songID){
        if (index == 0) {
          index = this.allSongFromArtistApp.length - 1;
          // this.theSongIDApp = this.allSongFromArtistApp[index].id;
          this.share.changeTheSong(this.allSongFromArtistApp[index]);
          // console.log(this.allSongFromArtistApp[index]);
        }
        else{
          index = index - 1;
          // this.theSongIDApp = this.allSongFromArtistApp[index].id;
          this.share.changeTheSong(this.allSongFromArtistApp[index]);
          // console.log(this.allSongFromArtistApp[index]);
        }
        // this.theLink = this.allSongFromArtistApp[index].link_source;
      }
    })
  }

  nextSong(songID){
    this.allSongFromArtistApp.forEach((el, index)=>{
      if(el.id == songID){
        if (index == this.allSongFromArtistApp.length - 1) {
          index = 0;
          // this.theSongIDApp = this.allSongFromArtistApp[index].id;
          this.share.changeTheSong(this.allSongFromArtistApp[index]);
          // console.log(this.allSongFromArtistApp[index]);
        }
        else{
          index = index + 1;
          // this.theSongIDApp = this.allSongFromArtistApp[index].id;
          this.share.changeTheSong(this.allSongFromArtistApp[index]);
          // console.log(this.allSongFromArtistApp[index]);
        }
        // this.theLink = this.allSongFromArtistApp[index].link_source;
      }
    })
  }
}

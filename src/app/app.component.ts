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
  
  constructor(private share: ShareService,private artistsService: ArtistsService, private route: ActivatedRoute,private songsService: SongsService){
    this.artistID = this.route.snapshot.paramMap.get('artistID');
    this.songID = this.route.snapshot.paramMap.get('songID');
  }

  ngOnInit(){
    this.share.currentLink.subscribe(link => {
      this.theLink = link;
    })

    this.share.currentDuration.subscribe(info=>{
      this.theDuration = info;
    });

    this.share.currentAllSongFromArtis.subscribe(data=>{
      this.allSongFromArtistApp = data;
      console.log(this.allSongFromArtistApp);
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

  prevSong(songID: number){
    // console.log(this.artistID);
    // this.songsService.getAllSongFromArtist(this.artistID).subscribe((listSongs) => {
    //   this.allSongFromArtist = listSongs;
    //   console.log(this.allSongFromArtist);
    // });
  }
}

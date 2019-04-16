import { Component, OnInit } from '@angular/core';
import { Songs } from '../../models/songs';
import { SongsService } from '../../services/songs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  AllSongFromArtist: Songs[];
  artistID: string = '0';
  songID: string = '0';
  theArtistID: number;
  theArtistName: string;
  theArtistAvatar: string;
  theArtistBio: string;
  
  constructor(private songsService: SongsService, private route: ActivatedRoute) {
    this.artistID = this.route.snapshot.paramMap.get('artistID');
    this.songID = this.route.snapshot.paramMap.get('songID');
   }

  ngOnInit() {
    this.songsService.getAllSongFromArtist(this.artistID).subscribe((listSongs) => {
      this.AllSongFromArtist = listSongs;
    });

    this.songsService.getTheArtist(this.artistID).subscribe(info=>{
      this.theArtistID = info.id;
      this.theArtistName = info.name;
      this.theArtistAvatar = info.avatar;
      this.theArtistBio = info.bio;
    });
  }





  

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Songs } from '../../models/songs';
import { SongsService } from '../../services/songs.service';
import { Artists } from '../../models/artists';
import { ArtistsService } from '../../services/artists.service';


@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  AllSongFromArtist: Songs[];
  artistID: string = '0';
  songID: string = '0';
  theArtist: Artists;
  theSong: Songs;
  constructor(private route: ActivatedRoute, private songsService: SongsService) {
    this.artistID = this.route.snapshot.paramMap.get('artistID');
    this.songID = this.route.snapshot.paramMap.get('songID');
  }

  ngOnInit() {
    this.songsService.getAllSongFromArtist(this.artistID).subscribe((listSongs) => {
      this.AllSongFromArtist = listSongs;
    });

    this.songsService.getTheArtist(this.artistID).subscribe(info => {
      this.theArtist = info;
    });

    this.songsService.getTheSong(this.songID, this.artistID).subscribe(info => {
      this.theSong = info;
    })
  }

}

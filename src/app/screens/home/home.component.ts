import { Component, OnInit } from '@angular/core';
import { Artists } from '../../models/artists';
import { ArtistsService } from '../../services/artists.service';
import { Songs } from '../../models/songs';
import { SongsService } from '../../services/songs.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  AllArtists: Artists[];
  AllSongs: Songs[];
  constructor(private artistsService: ArtistsService, private songsService: SongsService) { }

  ngOnInit() {

    this.artistsService.getAllArtists().subscribe((listArtist) => {
      this.AllArtists = listArtist;
    });

    
  }





}

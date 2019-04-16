import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Songs } from '../../models/songs';
import { SongsService } from '../../services/songs.service';
import {Artists} from '../../models/artists';
import { ArtistsService } from 'src/app/services/artists.service';
import {ShareService} from '../../share.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { defineDirective } from '@angular/core/src/render3';
@Component({
  selector: 'app-edit-song',
  templateUrl: './edit-song.component.html',
  styleUrls: ['./edit-song.component.css']
})
export class EditSongComponent implements OnInit {
  createForm: FormGroup;
  artistID: string = '0';
  songID: string = '0';
  allArtistsEdit: Artists[];
  // get song
  theSongID: number;
  theSongArtistID: number;
  theSongTitle: string;
  theSongImg: string;
  theSongLyrics: string;
  theSongLink2: string;

  selected:string = '';
  constructor(private route: ActivatedRoute, private songsService: SongsService, private artistsService: ArtistsService, private router: Router, private formBuilder: FormBuilder ) { 
    this.artistID = this.route.snapshot.paramMap.get('artistID');
    this.songID = this.route.snapshot.paramMap.get('songID');
    this.createForm
  }

  ngOnInit() {
    this.songsService.getTheSong(this.songID, this.artistID).subscribe(info => {
      this.createForm.patchValue({
        id: info.id, 
        artistId: info.artistId, 
        title: info.title, 
        link_source: info.link_source,
        image: info.image,
        lyrics: info.lyrics
      }) ;
    });
    this.addValidateForm();
   
  
  }

  addValidateForm(){
    this.createForm = new FormGroup({
      id: new FormControl('',Validators.required ),
      title: new FormControl('',Validators.required ),
      artistId: new FormControl('',Validators.required ),
      link_source: new FormControl('',Validators.required ),
  		image: new FormControl('', Validators.required),
  		lyrics: new FormControl('', Validators.required)
  	});
  }
  saveForm(){
      // console.log(this.createForm);
      let data = this.createForm.value
      this.songsService.editSong(data).subscribe(payload=>{
        this.router.navigate(['/artists/'+data.artistId+'/songs/']);
      });
      // console.log(this.createForm);
  }

}

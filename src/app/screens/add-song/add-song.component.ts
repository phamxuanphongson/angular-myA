import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Artists } from 'src/app/models/artists';
import { ArtistsService } from 'src/app/services/artists.service';
import { SongsService } from 'src/app/services/songs.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent implements OnInit {
  createForm: FormGroup;
  allArtist: any[];

  constructor(private artistsService: ArtistsService, private songsService: SongsService, private router: Router) { }

  ngOnInit() {
    this.artistsService.getAllArtists().subscribe(data=>{
      this.allArtist = data;
    })
    this.addValidateForm();
  }
  
  addValidateForm(){
    this.createForm = new FormGroup({
      id: new FormControl('',Validators.required ),
      title: new FormControl('',Validators.required ),
      artistId:new FormControl('',Validators.required ),
      link: new FormControl('',Validators.required ),
  		image: new FormControl('', Validators.required),
  		lyrics: new FormControl('', Validators.required)
  	});
  }

  saveForm(){
    if 
    ( this.createForm.controls.title.errors == undefined &&
      this.createForm.controls.artistId.errors == undefined &&
      this.createForm.controls.link.errors == undefined &&
      this.createForm.controls.image.errors == undefined &&
      this.createForm.controls.lyrics.errors == undefined )
    {
      let data = this.createForm.value;
      this.songsService.addSong(data).subscribe(payload=>{
        this.router.navigate(['/artists/'+data.artistId+'/songs']);
      });
    }
    
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Artists } from 'src/app/models/artists';
import { ArtistsService } from 'src/app/services/artists.service';
import { SongsService } from 'src/app/services/songs.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.component.html',
  styleUrls: ['./add-artist.component.css']
})
export class AddArtistComponent implements OnInit {
  createForm: FormGroup;
  allArtist: any[];
  constructor(private artistsService: ArtistsService, private songsService: SongsService, private router: Router) { }

  ngOnInit() {
    this.addValidateForm();
  }
  addValidateForm(){
    this.createForm = new FormGroup({
      name: new FormControl('',Validators.required ),
  		avatar: new FormControl('', Validators.required),
  		bio: new FormControl('', Validators.required)
  	});
  }

  saveForm(){
    if 
    ( this.createForm.controls.name.errors == undefined &&
      this.createForm.controls.avatar.errors == undefined &&
      this.createForm.controls.bio.errors == undefined )
    {
      let data = this.createForm.value;
      this.artistsService.addAnArtist(data).subscribe(payload=>{
        this.router.navigate(['/']);
      });
    }
    
  }
}

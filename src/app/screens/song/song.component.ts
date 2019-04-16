import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Songs } from '../../models/songs';
import { SongsService } from '../../services/songs.service';
import {Artists} from '../../models/artists';
import { ArtistsService } from 'src/app/services/artists.service';
import {ShareService} from '../../share.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

declare var getTheAudio: any;


@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit{
  closeResult: string;
  AllArtists: Artists[];
  randomNum: any[] = [];
  artistID: string = '0';
  songID: string = '0';
  // get song
  theSongID: number;
  theSongTitle: string;
  theSongImg: string;
  theSongLyrics: string;
  theSongLink: string;
  duration:string;
  // get artist
  theArtistID:number;
  theDuration:any;
  turnOnStr: string ;
  constructor(private router: Router,private modalService: NgbModal,private route: ActivatedRoute, private songsService: SongsService, private artistsService: ArtistsService , private share: ShareService) {
    this.artistID = this.route.snapshot.paramMap.get('artistID');
    this.songID = this.route.snapshot.paramMap.get('songID');
  
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.songsService.deleteSong(this.artistID,this.songID).subscribe(payload=>{
        this.router.navigate(['/artists/'+this.artistID+'/songs/']);
      });
      
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


  ngOnInit() {
    
    this.songsService.getTheSong(this.songID, this.artistID).subscribe(info => {
      this.theSongID = info.id;
      this.theSongTitle = info.title;
      this.theSongImg = info.image;
      this.theSongLyrics = info.lyrics;
      this.theSongLink = info.link_source;
      this.share.changeLink(info.link_source);
    });

    this.songsService.getTheArtist(this.artistID).subscribe(info=>{
       this.theArtistID = info.id;
    });
    
    this.artistsService.getAllArtists().subscribe(info=>{
      this.AllArtists = info;
    });

    this.randomNum = this.songsService.randomArrMinMax(6,0,20);
    if(this.randomNum.length>6){
      this.randomNum.splice(6,6);
    }
    // this.share.turnOnPlayer(this.turnOnStr);
    getTheAudio();
    this.share.turnOnPlayer(this.turnOnStr);

  }
  
}




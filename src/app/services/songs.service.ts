import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Songs } from '../models/songs';
import { Artists } from '../models/artists';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  apiUrl: string = "http://5c9b27b0a224170014de68d2.mockapi.io/webA/artists";
  ran: number;
  newListDapAn: any[] = [];
  constructor(private httpClient: HttpClient) { }
  
  getTheSong(songID,artistID){
    return this.httpClient.get<Songs>(`${this.apiUrl + "/" + artistID + "/songs/"  + songID}`)
  }

  getAllSongFromArtist(artistID) {
    return this.httpClient.get<Songs[]>(`${this.apiUrl + "/" + artistID}/songs`);
  }

  getTheArtist(artistID){
    return this.httpClient.get<Artists>(`${this.apiUrl+"/" +artistID}`);
  }

   randomArrMinMax(arrayLength:number,min:number,max:number) {
    var i = 0;
    while(i<arrayLength){
      this.ran = Math.floor(Math.random() * (max - min)) + min;
      if (this.newListDapAn.includes(this.ran) != true) {
        this.newListDapAn.push(this.ran);
        i++;
      }
    }
    return this.newListDapAn;
    
  }
  addSong(newObj){
    return this.httpClient.post<Songs>(`${this.apiUrl +'/'+newObj.artistId+'/songs'}`, newObj);
  }

  editSong(newObj){
    return this.httpClient.put<Songs>(`${this.apiUrl +'/'+newObj.artistId+'/songs/'+newObj.id}`, newObj);
  }

  deleteSong(artistID,songID){
    return this.httpClient.delete<Songs>(`${this.apiUrl +'/'+artistID+'/songs/'+songID}`);
  }
}

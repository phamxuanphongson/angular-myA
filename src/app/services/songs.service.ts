import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Songs } from '../models/songs';
import { Artists } from '../models/artists';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  apiUrl: string = "http://5c9b27b0a224170014de68d2.mockapi.io/webA/artists";
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
}

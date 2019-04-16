import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Artists} from '../models/artists';
@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  apiUrl: string = "http://5c9b27b0a224170014de68d2.mockapi.io/webA/artists";
  constructor( private httpClient: HttpClient) { }
  
  getAllArtists(){
    return this.httpClient.get<Artists[]>(`${this.apiUrl}`);
  }
  


}

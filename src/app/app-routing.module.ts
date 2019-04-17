import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { ArtistsComponent} from './screens/artists/artists.component';
import { SongComponent } from './screens/song/song.component';
import { EditSongComponent } from './screens/edit-song/edit-song.component';
import { AddSongComponent } from './screens/add-song/add-song.component';
import { AddArtistComponent } from './screens/add-artist/add-artist.component';
const routes: Routes = [
{
  path: '', component: HomeComponent
},
{
  path: 'artists/:artistID/songs', component: ArtistsComponent
},
{
  path: 'artists/:artistID/songs/:songID', component: SongComponent
},
{
  path: 'artists/:artistID/songs/:songID/edit', component: EditSongComponent
},
{
  path: 'add-song', component: AddSongComponent
},
{
  path: 'add-artist', component: AddArtistComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
exports: [RouterModule]
})
export class AppRoutingModule { }

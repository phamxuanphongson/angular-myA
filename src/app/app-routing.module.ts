import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { ArtistsComponent} from './screens/artists/artists.component';
import { SongComponent } from './screens/song/song.component';

const routes: Routes = [
{
  path: '', component: HomeComponent
},
{
  path: 'artists/:artistID/songs', component: ArtistsComponent
},
{
  path: 'artists/:artistID/songs/:songID', component: SongComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

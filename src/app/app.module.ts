import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { ArtistsComponent } from './screens/artists/artists.component';
import { SongComponent } from './screens/song/song.component';
import { EditSongComponent } from './screens/edit-song/edit-song.component';
import { AddSongComponent } from './screens/add-song/add-song.component';
import { AddArtistComponent } from './screens/add-artist/add-artist.component';
import { EditArtistComponent } from './screens/edit-artist/edit-artist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistsComponent,
    SongComponent,
    EditSongComponent,
    AddSongComponent,
    AddArtistComponent,
    EditArtistComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

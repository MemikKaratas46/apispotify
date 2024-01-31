import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { TrackComponent } from './track/track.component';

const routes: Routes = [
  {path : 'album', component: AlbumComponent},
  {path: 'track', component: TrackComponent}

]; //Qui scriveremo le route

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


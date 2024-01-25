import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDRcrTVmv1nHs90w6W5khyP3Xb82FmbUfVRxq_-X5rxVaFOGQAIJKV_HsFv-cBoOmrHwOgd4kEJR0uZmfGb_qT7izVE19zeEdVbMS1dfM_jcULtTeFn3b6nxM73DpGmpasCUpDk4u8Y8bj1EdKv4WycWEOEByzDLV2VS1Vy2FUvHVxDCxyHuquB6bTay0VHkkSN4TnOYspU0oo'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
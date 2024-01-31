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
        'Bearer BQAYG6eAf9V2r71gt_Vqgb21JekuTYL51JMa6Crrp2nzgSaHLVMglb2j1do0V_VXlZjmwK2GMJEPm78rRDEskfUXiQz78vrf5Mmr7AfjdB0wr_8G9QQmk6lImvkoQLUgAczfL8I3ZNrcPLAR-jCjAhHgSbfCfz2ypKdKLpjtM853_qgcq1bn8Y_dHf9mDjtGGIpNv5iAwtYslNY'    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
  searchAlbum(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=album`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAYG6eAf9V2r71gt_Vqgb21JekuTYL51JMa6Crrp2nzgSaHLVMglb2j1do0V_VXlZjmwK2GMJEPm78rRDEskfUXiQz78vrf5Mmr7AfjdB0wr_8G9QQmk6lImvkoQLUgAczfL8I3ZNrcPLAR-jCjAhHgSbfCfz2ypKdKLpjtM853_qgcq1bn8Y_dHf9mDjtGGIpNv5iAwtYslNY'    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _http: HttpClient) { }
  loadData() {
    return this._http.get(
      'http://api.open-notify.org/iss-now.json'
    );
  }
  addNote(result, longitude, latitude) {
    const url = `https://localhost:7277/server`;
    return this._http.post<any>(url, {
      result: result, longitude: longitude, latitude: latitude
    });
  }

  getLocations(){
    return this._http.get(
      'https://localhost:7277/server'
    );
  }

}

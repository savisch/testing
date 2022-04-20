import { GeocoderResponse } from './../../models/geocode';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GeocodingService {

    constructor(private http: HttpClient) {}

    getLocation(address: string): Observable<GeocoderResponse> {
        const url = `https://maps.google.com/maps/api/geocode/json?address=${address}&sensor=false&key=${environment.googleApiKey}`;
        return this.http.get<GeocoderResponse>(url);
    }
}


    
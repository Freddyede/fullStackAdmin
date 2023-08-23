import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JsonService} from "./json.service";

@Injectable({
    providedIn: 'root'
})
export class HttpService {


    private url: string = 'https://localhost:8000/api';

    constructor(private readonly http: HttpClient, private readonly jsonService: JsonService) { }

    getUri(uri: string='') {
        return this.http.get(this.url + uri);
    }

    postUri(uri: string, object: any, headersObject: any|null = null) {
        let headers: HttpHeaders = new HttpHeaders({});
        if (headersObject !== null){
            headers = new HttpHeaders({
                'Authorization': headersObject.token
            });
        }
        return headersObject ? this.http.post(this.url + uri, this.jsonService.stringifyObject(object), {headers: headers}) : this.http.post(this.url + uri, this.jsonService.stringifyObject(object));
    }

}

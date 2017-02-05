import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class UserService {

    private apiEndPoint: string = "/api/register";

    constructor(private http: Http) { }

    inviteCandidate(inviteFormValue: any):Observable<string> {
        
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url:string = this.apiEndPoint;
        let body = JSON.stringify(inviteFormValue);        
        let options:RequestOptionsArgs = { headers:headers };
        
        return this.http
            .post(url, body, options)
            .map(data=>{ 
                console.log(data);
                return "";
            });
    }
}
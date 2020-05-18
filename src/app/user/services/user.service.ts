import { Injectable } from '@angular/core';
import { User } from './../../shared/models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
    url: string = environment.BaseURL + 'user'

    constructor(public http: HttpClient) {

    }

    profile(id) {
        return this.http.get(this.url + '/' + id, this.getHeaders());
    }

    private getHeaders() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                "Authorization": localStorage.getItem('token')
            })
        }
    }
}
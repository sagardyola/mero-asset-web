import { Injectable } from "@angular/core";
import { User } from 'src/app/shared/models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()
export class AuthService {
    url: string = environment.BaseURL + 'auth/'

    constructor(public http: HttpClient) {

    }

    login(data: User) {
        //http call
        return this.http.post(this.url + 'login', data, this.getHeaders());
    }

    register(data: User) {
        return this.http.post(this.url + 'register', data, this.getHeaders());

    }

    forgotPassword(email: string) {
        return this.http.post(this.url + 'forgot-password', { email }, this.getHeaders());

    }

    resetPassword(token: string, data: User) {
        return this.http.post(this.url + 'reset-password/' + token, data, this.getHeaders());

    }

    private getHeaders() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
    }
}
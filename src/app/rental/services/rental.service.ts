import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rental } from './../../shared/models/rental.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable()
export class RentalService {
    url: string = environment.BaseURL + 'rental/'
    constructor(public http: HttpClient) {
    }

    listAll() {
        return this.http.get(this.url, this.getHeaders());
    }

    details(id: string) {
        return this.http.get(this.url + id, this.getHeaders());
        // return this.http.get(`${this.url}${id}`, this.getHeaders());
    }

    getCreate() {
        return this.http.get(this.url + 'create', this.getHeaders());
    }

    create(data: Rental) {
        return this.http.post(this.url + 'create', data, this.getHeaders());
    }

    update(data: Rental) {
        return this.http.put(this.url + data._id, data, this.getHeaders());
    }

    remove(id) {
        return this.http.delete(this.url + id, this.getHeaders());
    }

    upload(data: Rental, files: any, method) {
        return Observable.create(observer => {
            var xhr = new XMLHttpRequest();
            var formData = new FormData();

            if (files.length) {
                formData.append('img', files[0], files[0].name)
            }

            for (let key in data) {
                formData.append(key, data[key]);
            }//field ma bhako data upload..loop object and object bhitra ko key value pair append in form data

            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        observer.next(xhr.response);
                    } else {
                        observer.error(JSON.parse(xhr.response));
                    }
                }
            }
            let url = this.url;
            if (method == 'PUT') {
                url = this.url + data._id
            }

            const finalUrl = url + '?token=' + localStorage.getItem('token');
            xhr.open(method, finalUrl, true);
            xhr.send(formData);
        });
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
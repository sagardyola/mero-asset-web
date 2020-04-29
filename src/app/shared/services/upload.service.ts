import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class UploadService {
    upload(data: any, files: any, method, url) {
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
            // let url = this.url;
            // if (method == 'PUT') {
            //     url = this.url + data._id
            // }

            const finalUrl = url + '?token=' + localStorage.getItem('token');
            xhr.open(method, finalUrl, true);
            xhr.send(formData);
        });
    }
}
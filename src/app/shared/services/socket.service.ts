import { Injectable } from "@angular/core";
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable()
export class SocketService {

    socket;
    constructor() {
        this.socket = io(environment.SocketUrl);
    }
}
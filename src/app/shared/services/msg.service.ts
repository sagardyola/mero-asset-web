import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MethodCall } from '@angular/compiler';

@Injectable()
export class MsgService {
    constructor(public toastr: ToastrService) {

    }

    showSuccess(msg: string) {
        this.toastr.success(msg, 'Success');
    }

    showInfo(msg: string) {
        this.toastr.info(msg, 'Info');
    }

    showWarning(msg: string) {
        this.toastr.warning(msg, 'Warning');
    }
    showError(error: any) {
        // this.toastr.error(msg, 'Error');
        // use this method as error handling Method
        // pass every error to this Method
        // parse appropriate message from error
        // show them as error
        if (error.error) {
            let errMsg = error.error.err;
            this.displayError(errMsg.msg)
        } else {
            let errMsg = error.err.msg;
            this.displayError(errMsg)
        }

        // debugger;
    }
    private displayError(msg: string) {
        this.toastr.error(msg);
    }


}
import { Injectable } from '@angular/core';

import Swal from 'sweetalert2';

@Injectable()
export class DialogService {
    constructor() { }

    showRemove() {
        return Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
    }

    showRemoved() {
        Swal.fire(
            'Deleted!',
            'Your ad has been removed.',
            'success'
        )
    }
}
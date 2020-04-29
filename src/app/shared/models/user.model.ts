export class User {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    gender: string;
    dob: Date;
    phoneNumber: number;
    address: string;
    image: string;

    constructor(obj: any) {
        this.firstName = obj.firstName || '';
        this.lastName = obj.lastName || '';
        this.userName = obj.userName || '';
        this.email = obj.email || '';
        this.password = obj.password || '';
        this.gender = obj.gender || '';
        this.dob = obj.dob || '';
        this.phoneNumber = obj.phoneNumber || 0;
        this.address = obj.address || '';
        this.image = obj.image || '';
    }
}
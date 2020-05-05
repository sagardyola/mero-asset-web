// enum Color {
//     Red, Green
// }

export class Rental {
    code: string;
    title: string;
    price: number;
    negotiable: boolean;
    dimension: Number;
    location: string;
    description: string;
    image: string;

    itemFor: string;
    itemType: string;

    gender: string;
    maritalStatus: string;

    overnightGuests: string;
    partyHabits: string;
    smoker: string;
    petsFriendly: Boolean;


    livingRoom: Boolean;
    bedRoom: Boolean;
    kitchen: Boolean;
    bathRoom: Boolean;
    balcony: Boolean;

    garden: Boolean;
    parkingSpace: Boolean;
    garage: Boolean;
    securityGuard: Boolean;
    backupGenerator: Boolean;
    waterSupply: Boolean;
    internet: Boolean;
    gymnasium: Boolean;
    swimmingPool: Boolean;
    elevator: Boolean;

    user: string;

    _id: string; //???????????????

    constructor(details: any) {
        for (let key in details) {
            this[key] = details[key] || void (0);
        }
    }
}
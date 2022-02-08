import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
    name: string;
    location: {
        lat: number,
        lon: number,
    }

    color: string;

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: +faker.address.latitude(),
            lon: +faker.address.longitude(),
        }
    };

    markerContent(): string {
        return `User: ${this.name}`
    }
}
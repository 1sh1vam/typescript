import faker from 'faker';

export class Company {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number,
        lon: number,
    }
    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: +faker.address.latitude(),
            lon: +faker.address.longitude(),
        }
    }

    markerContent(): string {
        return `
            <h1>Company Name: ${this.companyName}</h1>
            <h3>Catchphrase: ${this.catchPhrase}</h3>
        `
    }
}
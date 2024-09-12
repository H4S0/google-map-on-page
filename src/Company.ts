// Importing the faker library to generate random company data
import { faker, Faker } from '@faker-js/faker';

// Company class representing a company with a name, catchphrase, and location
export class Company {
  companyName: string; // Stores the company's name
  catchPhrase: string; // Stores the company's catchphrase
  location: {
    // Stores the company's location with latitude and longitude
    lat: number;
    lng: number;
  };

  // Constructor method initializes the company with random data
  constructor() {
    this.companyName = faker.company.name(); // Generate a random company name
    this.catchPhrase = faker.company.catchPhrase(); // Generate a random catchphrase
    this.location = {
      lat: parseFloat(faker.address.latitude()), // Generate a random latitude
      lng: parseFloat(faker.address.longitude()), // Generate a random longitude
    };
  }

  // Method to return the content to display in the infowindow
  markerContent(): string {
    return `Company Name: ${this.companyName}`; // Display the company's name
  }
}

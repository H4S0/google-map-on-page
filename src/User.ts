// Importing the faker library to generate random user data
import { faker } from '@faker-js/faker';

// User class representing a user with a name and location
export class User {
  name: string; // Stores the user's first name
  location: {
    // Stores the user's location with latitude and longitude
    lat: number;
    lng: number;
  };

  // Constructor method initializes the user with a random name and location
  constructor() {
    this.name = faker.name.firstName(); // Generate a random first name
    this.location = {
      lat: parseFloat(faker.address.latitude()), // Generate a random latitude
      lng: parseFloat(faker.address.longitude()), // Generate a random longitude
    };
  }

  // Method to return the content to display in the infowindow
  markerContent(): string {
    return `User Name: ${this.name}`; // Display the user's name
  }
}

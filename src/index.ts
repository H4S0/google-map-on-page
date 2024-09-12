// Importing the User, Company, and Map classes from their respective modules
import { User } from './User';
import { Company } from './Company';
import { Map } from './map';

// Creating instances of the User and Company classes
const user = new User(); // Creates a random user with a name and location
const company = new Company(); // Creates a random company with a name, catchphrase, and location

// Creating an instance of the Map class and associating it with the HTML element with the ID 'map'
const customMap = new Map('map');

// Adding markers for the user and company on the map
customMap.addMarker(user); // Adds a marker on the map for the user
customMap.addMarker(company); // Adds a marker on the map for the company

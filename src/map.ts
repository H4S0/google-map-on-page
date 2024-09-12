// Interface that defines the structure of an object that can be mapped
// The object must have a location (with latitude and longitude) and a method to return content for the info window
interface Mappable {
  location: {
    lat: number; // Latitude of the location
    lng: number; // Longitude of the location
  };
  markerContent(): string; // Method that returns the content for the info window when the marker is clicked
}

// Class that handles creating and interacting with a Google Map
export class Map {
  private googleMap: google.maps.Map; // A private variable to hold the Google Map instance

  // Constructor that initializes the Google Map with a given divId
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement, // Associates the map with the HTML element by divId
      {
        zoom: 1, // Sets the initial zoom level
        center: {
          // Sets the initial center of the map at coordinates (0, 0)
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  // Method to add a marker to the map for any object that implements the Mappable interface
  addMarker(MapMarker: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap, // The map instance on which to place the marker
      position: {
        // The position of the marker based on the object's location
        lat: MapMarker.location.lat,
        lng: MapMarker.location.lng,
      },
    });

    // Add an event listener to display an info window when the marker is clicked
    // The info window content is retrieved from the markerContent method of the Mappable object
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: MapMarker.markerContent(), // Display the content inside the info window
      });

      // Opens the info window on the map, anchored to the clicked marker
      infoWindow.open(this.googleMap, marker);
    });
  }
}

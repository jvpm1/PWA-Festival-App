// database.ts
export interface LocationData {
  id: string;
  name: string;
  offset: [number, number]; // [x, y] coordinates on the image
}

// Sample location data - replace with your actual locations
export const locations: LocationData[] = [
  {
    id: "location-1",
    name: "Main Entrance",
    offset: [100, 150],
  },
  {
    id: "location-2",
    name: "Conference Hall",
    offset: [250, 200],
  },
  {
    id: "location-3",
    name: "Cafeteria",
    offset: [180, 300],
  },
  {
    id: "location-4",
    name: "Parking Lot",
    offset: [50, 350],
  },
  {
    id: "location-5",
    name: "Emergency Exit",
    offset: [320, 120],
  },
];

export interface MapConfig {
  centerPoint: [number, number];
  imageUrl: string;
  imageBounds: [[number, number], [number, number]];
}

export const mapConfig: MapConfig = {
  centerPoint: [200, 200],
  imageUrl: "/path/to/your/map-image.png",
  imageBounds: [
    [0, 0],
    [400, 400],
  ],
};

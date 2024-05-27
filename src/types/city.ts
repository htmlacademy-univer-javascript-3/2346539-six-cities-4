
export type Location = {
    latitude: number;
    longitude: number;
    zoom: number;
}

export type City = {
    location: Location;
    name: string;
}

export const defaultCity = {
  location: {
    latitude: 48.86,
    longitude: 2.35,
    zoom: 12
  },
  name: 'Paris',
};

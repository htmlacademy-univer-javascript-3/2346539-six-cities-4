export type Point = {
    id: string;
    latitude: number;
    longitude: number;
}

export type City = {
    name: string;
    point: Point;
    zoom: number;
}

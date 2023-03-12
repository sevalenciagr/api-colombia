export interface City {
    id:                 number;
    name:               string;
    description:        string;
    surface:            number | null;
    population:         number | null;
    postalCode:         null | string;
    departamentId:      number;
    departament:        null;
    touristAttractions: null;
    presidents:         null;
    paramos:            null;
}
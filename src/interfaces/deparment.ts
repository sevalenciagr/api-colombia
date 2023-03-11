export interface Department {
    id:             number;
    name:           string;
    description:    string;
    cityCapitalId:  number;
    municipalities: number;
    surface:        number;
    population:     number;
    phonePrefix:    string;
    countryId:      number;
    cityCapital:    null;
    country:        null;
    cities:         null;
    regionId:       number;
    region:         null;
}
export interface DeparmentResponse {
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

export interface Ciudad {
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

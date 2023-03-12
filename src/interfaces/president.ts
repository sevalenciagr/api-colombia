export interface President {
    id:              number;
    image:           string;
    name:            string;
    lastName:        string;
    startPeriodDate: Date;
    endPeriodDate:   Date | null;
    politicalParty:  string;
    description:     string;
    cityId:          number;
    city:            null;
}

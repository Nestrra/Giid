








export interface DepartamentResponse {
    data:Departament[];
  
}

export interface Departament {
    id:   string;
    name: string;
    code: string;
}

export interface Cities {
    id:               string;
    name:             string;
    code:             string;
    code_departament: string;
}


export interface Activity {
    id:              string;
    title:           string;
    price:           number;
    description:     string;
    purpose:         string;
    duration:        string;
    includes:        string;
    itinerary:       string;
    recommendations: string;
    status:          boolean;
    departament:     string;
    city:            string;
    images:          Image[];
}

export interface Image {
    id:  number;
    url: string;
}

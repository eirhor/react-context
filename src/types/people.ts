export interface IPeopleResponse {
    Created: string;
    Homeworld: string;
    HairColor: string;
    BirthYear: string;
    Url: string;
    Name: string;
    Films: string[];
    EyeColor: string;
    Mass: string;
    Gender: string;
    Edited: string;
    Height: string;
    Starships: string[];
    Species: string;
    SkinColor: string;
    Vehicles: string[];
}

export interface IPagedPeopleResponse {
    Count: number;
    Next: string | null;
    Previous: string | null;
    Results: IPeopleResponse[];
}
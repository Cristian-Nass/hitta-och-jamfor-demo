import axios from "axios";

const getDataUrl =
  "https://gist.githubusercontent.com/Cristian-Nass/2536c0f4dbbbef9c310a6c79c2513805/raw/69e4cbdfc015e8fae429a4947b31f2f165ef4fdc/schools.json";

export interface Schools {
  Header: string;
  IngressText: string;
  FilterOptions: string;
  ShortName: string;
  entites: SchoolsEntites[];
}

export interface SchoolsEntites {
  Name: string;
  PhoneNumber: number;
  VisitationAddress: string;
  PostalAddress: string;
  Latitude: number;
  Longditude: number;
  Area: string;
  Regi: string;
  Inriktning: string;
  attributes: null;
}

export const getSchoolsData = async (): Promise<Schools> => {
  return axios
    .get(getDataUrl)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      return e;
    });
};

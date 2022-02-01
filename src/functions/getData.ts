import axios from "axios";

export interface School {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const getSelectedSchoolData = async (
  selected: string
): Promise<School[]> => {
  return axios
    .get("https://jsonplaceholder.typicode.com/" + selected)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      return e;
    });
};

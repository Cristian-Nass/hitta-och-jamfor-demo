import axios from "axios";

interface School {
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

export const getSelectedData = async (): Promise<School[]> => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      return e;
    });
};

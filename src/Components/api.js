import axios from 'axios'

export function fetchContactDataFromAPI(token_id) {
  const baseURL = 'http://localhost:8080/api/v1/token';
  let encodedURI =  window.encodeURI(baseURL);
  return axios.post(encodedURI, {
    token_id:  token_id
  }).then(function(response) {
    /* console.log(response);*/
    return response.data.data;
  })
    .catch(function(error) {
      /* console.log(error);*/
      return null;
    });
}

export function addNewContact() {
  const baseURL = 'http://localhost:8080/api/v1/contacts';
  let encodedURI =  window.encodeURI(baseURL);
  return axios.post(encodedURI, {
    contact: {
      firstname: 'Eduardo',
      lastname: 'Marques',
      email: 'eduardomarques@teste.com'
    }
  }).then(function(response) {
    // return contact data and the token data
    return response.data;
  });
}

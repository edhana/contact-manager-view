import axios from 'axios'

export function fetchContactDataFromAPI(token_id) {
  const baseURL = 'http://localhost:8080/api/v1/token';
  let encodedURI =  window.encodeURI(baseURL);
  return axios.post(encodedURI, {
    token_id:  token_id
  }).then(function(response) {
    return response.data;
  })
    .catch(function(error) {
      console.log(error);
      return null;
    });
}

export function addNewContact(contactInfo) {
  const baseURL = 'http://localhost:8080/api/v1/contacts';
  let encodedURI =  window.encodeURI(baseURL);
  return axios.post(encodedURI, {
    contact: contactInfo
  }).then(function(response) {
    return response.data;
  });
}

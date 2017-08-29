import axios from 'axios'
import Cookies from 'universal-cookie'

export function fetchContactDataFromAPI (tokenId) {
  const baseURL = 'http://localhost:8080/api/v1/token'
  let encodedURI = window.encodeURI(baseURL)
  return axios.post(encodedURI, {
    token_id: tokenId
  }).then(function (response) {
    return response.data
  })
    .catch(function (error) {
      console.log(error)
      return null
    })
}

export function addNewContact (contactInfo) {
  const baseURL = 'http://localhost:8080/api/v1/contacts'
  let encodedURI = window.encodeURI(baseURL)
  return axios.post(encodedURI, {
    contact: contactInfo
  }).then(function (response) {
    return response.data
  })
}

export function fetchContact () {
  const cookies = new Cookies()
  let tokenCookie = cookies.get('contactToken')

  if (tokenCookie) {
    let contactData = fetchContactDataFromAPI(tokenCookie)
    if (contactData) {
      return contactData
    }
  }

  return null
}

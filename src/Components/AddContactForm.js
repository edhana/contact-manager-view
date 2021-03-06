import React, { Component } from 'react'
import {addNewContact} from './api.js'
import Cookies from 'universal-cookie'

class AddContactForm extends Component {
  constructor () {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()

    // TODO: Add form validation
    let contact = {
      firstname: this.refs.firstname.value,
      lastname: this.refs.lastname.value,
      email: this.refs.email.value
    }

    addNewContact(contact).then(function (data) {
      if (data.token != null) {
        // save the cookie
        const cookies = new Cookies()
        cookies.set('contactToken', data.token, { path: '/' })

        this.props.onContactAdd()
        this.props.history.replace({pathname: '/home'})
      }
    }.bind(this))
  }

  render () {
    return (
      <div className='container'>
        <h3>Add Contact</h3>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <lable>First Name</lable><br />
            <input type='text' className='form-control' ref='firstname' />
          </div>
          <div className='form-group'>
            <lable>Last Name</lable><br />
            <input type='text' className='form-control' ref='lastname' />
          </div>
          <div className='form-group'>
            <lable>Email</lable><br />
            <input type='text' className='form-control' ref='email' />
          </div>
          <input type='submit' value='Submit' className='btn btn-primary' />
        </form>
      </div>
    )
  }
}

export default AddContactForm

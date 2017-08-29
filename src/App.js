import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Cookies from 'universal-cookie'
import Navbar from './Components/Navbar.js'
import Home from './Components/Home.js'
import Price from './Components/Price.js'
import AddContactForm from './Components/AddContactForm.js'
import { fetchContact } from './Components/api.js'
import './App.css'

class App extends Component {
  constructor (props) {
    super()

    this.state = { token: null }

    this.handleContactUpdate = this.handleContactUpdate.bind(this)
  }

  handleContactUpdate () {
    // Recover token from the cookies
    const cookies = new Cookies()
    let tokenCookie = cookies.get('contactToken')

    if (tokenCookie) {
      this.setState({
        token: tokenCookie
      })
    }
  }

  render () {
    const AddContactPage = (props) => {
      return (
        <AddContactForm onContactAdd={this.handleContactUpdate}
          history={props.history}
          location={props.location}
          match={props.match}
      />
      )
    }
    return (
      <Router>
        <section className='App'>
          <Navbar contact={fetchContact()} />

          <div className='container'>
            <Route path='/home' component={Home} />
            <Route path='/price' component={Price} />
            <Route path='/addcontact' render={AddContactPage} />
          </div>
        </section>
      </Router>
    )
  }
}

export default App

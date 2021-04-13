import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Header
import Header from './components/Header'

// Screens
import HomeScreen from './screens/HomeScreen'
import ProjectScreen from './screens/ProjectScreen'

// Footer
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <div className='mainContainer'>
          <Route path='/projects' component={ProjectScreen} exact />
          <Route path='/' component={HomeScreen} exact />
        </div>
      </main>
      <Footer />
    </Router>
  )
}

export default App

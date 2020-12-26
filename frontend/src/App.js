import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './global.css'

//Main Components
import Header from './components/Header'
import Footer from './components/Footer'

//Screen Components
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen'


const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Container>
                    <Route path="/" component={HomeScreen} exact />
                    <Route path="/product/:id" component={ProductScreen} />
                </Container>
            </main>
            <Footer />
        </Router>
    )
}

export default App

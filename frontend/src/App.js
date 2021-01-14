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
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'


const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Container>
                    <Route path="/login" component={LoginScreen} />
                    <Route path="/register" component={RegisterScreen} />
                    <Route path="/product/:id" component={ProductScreen} />
                    <Route path="/cart/:id?" component={CartScreen} />
                    <Route path="/" component={HomeScreen} exact />
                </Container>
            </main>
            <Footer />
        </Router>
    )
}

export default App

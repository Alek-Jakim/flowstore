import React from 'react'
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { styles } from '../utils/styles';
import FormContainer from '../components/FormContainer';
import { useSelector, useDispatch } from 'react-redux';
import { saveShippingAddress } from '../redux/actions/cartActions'


const ShippingScreen = ({ history }) => {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart;

    const dispatch = useDispatch()

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        history.push('/payment')
    }

    return (
        <FormContainer>
            <h1 style={styles.profileLabel}>Shipping</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="address">
                    <Form.Label style={styles.profileLabel}>
                        Address
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter address" value={address} required onChange={(e) => setAddress(e.target.value)} style={styles.formInputStyles}></Form.Control>
                </Form.Group>

                <Form.Group controlId="city">
                    <Form.Label style={styles.profileLabel}>
                        City
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter city" value={city} required onChange={(e) => setCity(e.target.value)} style={styles.formInputStyles}></Form.Control>
                </Form.Group>

                <Form.Group controlId="postalCode">
                    <Form.Label style={styles.profileLabel}>
                        Postal Code
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter postal code" value={postalCode} required onChange={(e) => setPostalCode(e.target.value)} style={styles.formInputStyles}></Form.Control>
                </Form.Group>

                <Form.Group controlId="country">
                    <Form.Label style={styles.profileLabel}>
                        Country
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter country" value={country} required onChange={(e) => setCountry(e.target.value)} style={styles.formInputStyles}></Form.Control>
                </Form.Group>

                <Button type="submit" variant="primary">Continue</Button>
            </Form>
        </FormContainer>
    )
}

export default ShippingScreen

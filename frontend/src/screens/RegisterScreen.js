import React from 'react'
import { useState, useEffect } from 'react';

//Bootstrap, Router & Miscellaneous
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { styles } from '../utils/styles';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/actions/userActions'

//Components
import FormContainer from '../components/FormContainer';
import Message from '../components/Message';
import Loader from '../components/Loader';

const RegisterScreen = ({ location, history }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch();

    const userRegister = useSelector(state => state.userRegister)

    const { loading, error, userInfo } = userRegister;

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const handleSubmit = (e) => {
        e.preventDefault()
        //Dispatch register
        if (password !== confirmPassword) {
            setMessage('Passwords do not match!')
        } else {
            dispatch(register(name, email, password))
        }
    }
    return (
        <FormContainer>
            <h1 style={styles.h1Style}>Sign Up</h1>
            {message && <Message variant="danger">{message}</Message>}
            {error && <Message variant="danger">{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                    <Form.Label>
                        Name
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} style={styles.formInputStyles}></Form.Control>
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>
                        Email Address
                    </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.formInputStyles}></Form.Control>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>
                        Password
                    </Form.Label>
                    <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.formInputStyles}></Form.Control>
                </Form.Group>

                <Form.Group controlId="confirmPassword">
                    <Form.Label>
                        Confirm Password
                    </Form.Label>
                    <Form.Control type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={styles.formInputStyles}></Form.Control>
                </Form.Group>

                <Button type="submit" variant="primary" style={styles.buttonStyle}>Register</Button>
            </Form>

            <Row className="py-3">
                <Col>
                    Already have an account ? <Link to={redirect ? `/login?redirect=${redirect}` : `/login`}>Login </Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default RegisterScreen

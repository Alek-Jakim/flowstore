import React, { useEffect, useState } from 'react'

//Bootstrap, Router & Miscellaneous
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { styles } from '../utils/styles';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/userActions'

//Components
import FormContainer from '../components/FormContainer';
import Message from '../components/Message';
import Loader from '../components/Loader';

const LoginScreen = ({ location, history }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin)

    const { loading, error, userInfo } = userLogin;

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const handleSubmit = (e) => {
        e.preventDefault()
        //Dispatch login
        dispatch(login(email, password))

        console.log(error)
    }

    return (
        <FormContainer>
            <h1 style={styles.h1Style}>Sign In</h1>
            {error && <Message variant="danger">{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={handleSubmit}>
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
                <Button type="submit" variant="primary" style={styles.buttonStyle}>Sign In</Button>
            </Form>

            <Row className="py-3">
                <Col>
                    New Customer ? <Link to={redirect ? `/register?redirect=${redirect}` : `/register`}>Register Here</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default LoginScreen

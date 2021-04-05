import React from 'react'
import { useState, useEffect } from 'react';

//Bootstrap, Router & Miscellaneous
import { Form, Button, Row, Col } from 'react-bootstrap';
import { styles } from '../utils/styles';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails, updateUserProfile } from '../redux/actions/userActions'

//Components
import Message from '../components/Message';
import Loader from '../components/Loader';

const ProfileScreen = ({ location, history }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch();

    const userDetails = useSelector(state => state.userDetails)
    const { loading, error, user } = userDetails;

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin;

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success } = userUpdateProfile;

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        } else {
            if (!user.name) {
                dispatch(getUserDetails('profile'))
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, history, userInfo, user])


    const handleSubmit = (e) => {
        e.preventDefault()
        //Dispatch register
        if (password !== confirmPassword) {
            setMessage('Passwords do not match!')
        } else {
            //dispatch update profile
            dispatch(updateUserProfile({ id: user._id, name, email, password }))
        }
    }
    return (
        <Row>
            <Col md={3}>
                <h2 style={styles.h1Style}>User Profile</h2>
                {message && <Message variant="danger">{message}</Message>}
                {error && <Message variant="danger">{error}</Message>}
                {success && <Message variant="success">Profile Successfully Updated!</Message>}
                {loading && <Loader />}
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="email">
                        <Form.Label style={styles.profileLabel}>
                            Name
                </Form.Label>
                        <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} style={styles.formInputStyles}></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="email">
                        <Form.Label style={styles.profileLabel}>
                            Email Address
                </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.formInputStyles}></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label style={styles.profileLabel}>
                            Password
                </Form.Label>
                        <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.formInputStyles}></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="confirmPassword">
                        <Form.Label style={styles.profileLabel}>
                            Confirm Password
                </Form.Label>
                        <Form.Control type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={styles.formInputStyles}></Form.Control>
                    </Form.Group>

                    <Button type="submit" variant="primary" style={styles.buttonStyle}>Update</Button>
                </Form>
            </Col>

            <Col md={9} className="my-4">
                <h2 style={{ color: '#000' }}>My Orders</h2>
            </Col>
        </Row>
    )
}

export default ProfileScreen

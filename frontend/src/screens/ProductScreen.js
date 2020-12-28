import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating';
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProductDetails } from '../redux/actions/productActions'


const ProductScreen = ({ match }) => {

    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.productDetails)

    const { loading, error, product } = productDetails

    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
    }, [dispatch, match])


    return (
        <>
            <Link className="btn btn-dark my-3" to="/">Go Back</Link>
            {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : (
                <Row>
                    <Col md={5}>
                        <Image src={product.image} alt={product.name} fluid />
                    </Col>
                    <Col md={3} className="mr-5">
                        <ListGroup variant="flush" style={{ width: '300px', maxWidth: '600px' }}>
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating rating={product.rating} text={`${product.numReviews} reviews`} />
                            </ListGroup.Item>
                            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                            <ListGroup.Item style={{ fontSize: '1rem' }}>Description: {product.description}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3} style={{ width: '500px', }}>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Price:
                                    </Col>
                                        <Col>
                                            <strong>${product.price}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Status:
                                    </Col>
                                        <Col>
                                            {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button className="btn-block" type="button" disabled={product.countInStock === 0}>Add To Cart</Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            )}
        </>
    )
}

export default ProductScreen

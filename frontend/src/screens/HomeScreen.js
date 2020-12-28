import React from 'react'
import { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../redux/actions/productActions'
import axios from 'axios'

const HomeScreen = () => {

    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList)

    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])


    return (
        <>
            <h1 style={{ marginTop: '10px' }}>Latest Products</h1>
            {loading ? <h1>Loading...</h1> : error ? <h3>{error}</h3> :
                <Row>
                    {products.map(product => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
            }
        </>
    )
}

export default HomeScreen

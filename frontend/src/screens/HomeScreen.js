import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions'

// axios.get('./api/products').then(res) //make an axios request to get the products, useEffect is to bring in the products
//this code below integrates the backend server 5000 with the front end at port 3000 by importing axios
const HomeScreen = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList) // grabs the products from the state. and displays it on our output line 20 onwards
  const { loading, error, products } = productList //pulling these values of state from productReducers

  useEffect(() => {
    dispatch(listProducts()) //firing off the action to get the products down through reducer to the state
  }, [dispatch])

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default HomeScreen

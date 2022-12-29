import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Footer from '../components/Footer'
import StoreItem from '../components/StoreItem'
import storeItems from "../data/items.json"

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem{...item}/>
          </Col>
        ))}
      </Row>
      <Footer/>
    </>
  )
}

export default Home
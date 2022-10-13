import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import MenuCategory from './components/MenuCategory';
import MenuItem from './components/MenuItem';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md="3">
            <h2 className="text-left">Menu Categories</h2>
            <MenuCategory onClick={setSelectedCategory} />
          </Col>
          <Col md="9">
            <MenuItem id={selectedCategory} />
          </Col>
        </Row>
      </Container>
      {/* <div>
        <Vegetables />
        <Ceviche />
        <MeatAndpoultry />
        <SeaFood />
        <Paella />
        <SideOrders />
        <Desserts />
      </div> */}
    </>
  );
}

export default App;

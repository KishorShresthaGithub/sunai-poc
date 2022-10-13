import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import MenuCategory from './components/MenuCategory';
import MenuItem from './components/MenuItem';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div>
      <h1>Menu Categories</h1>
      <div>
        <Container>
          <Row>
            <Col>
              <MenuCategory onClick={setSelectedCategory} />
            </Col>
            <Col>
              <MenuItem id={selectedCategory} />
            </Col>
          </Row>
        </Container>
      </div>
      {/* <div>
        <Vegetables />
        <Ceviche />
        <MeatAndpoultry />
        <SeaFood />
        <Paella />
        <SideOrders />
        <Desserts />
      </div> */}
    </div>
  );
}

export default App;

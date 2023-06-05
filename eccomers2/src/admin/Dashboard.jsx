import React from 'react'
import { Container,Row,Col } from 'reactstrap';
import '../styles/dashboard.css'
import useGetdata from '../custom-hooks/useGetData.js';

const Dashboard = () => {
  const {data:products} =useGetdata('products');
  const {data:users} =useGetdata('users');

  return (

    <> 
    <section>
      <Container>
          <Row>
            <Col className='lg-3'>
              <div className='revenue_box'>
                <h5>Total Sales</h5>
                <span>$7890</span>
              </div>
            </Col>
            <Col className='lg-3'>
            <div className='order_box'>
                <h5>Orders</h5>
                <span>90</span>
              </div>
            </Col>
            <Col className='lg-3'>
            <div className='products_box'>
                <h5>Total Products</h5>
                <span>{products.length}</span>
              </div>
            </Col>
            <Col className='lg-3'>
            <div className='users_box'>
                <h5>Total Users</h5>
                <span>{users.length}</span>
              </div>
            </Col>
          </Row>
      </Container>
    </section>
    </>
  )
}

export default Dashboard
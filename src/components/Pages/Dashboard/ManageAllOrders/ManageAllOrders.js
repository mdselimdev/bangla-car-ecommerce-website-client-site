import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ManageSingleOrder from './ManageSingleOrder/ManageSingleOrder';

const ManageAllOrders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('https://dry-mesa-55750.herokuapp.com/order')
            .then(result => {
           setOrders(result.data);
            })
            .catch(error => {
                console.log(error.message);
                })
    },[])

    return (
        <div>
            <h1 className="text-center py-5 head-title">Mannage All Orders</h1>
            <Container fluid>
            <Row>
                {
                  orders.map(order=> <ManageSingleOrder key={order._id} car={order} orders={orders} setOrders={setOrders}></ManageSingleOrder>)    
                }
            </Row>
            </Container>
        </div>
    );
};

export default ManageAllOrders;
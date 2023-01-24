import React from 'react';
import { useNavigate } from 'react-router';
import './Service.css';

const Service = ({service}) => {
    const navigate = useNavigate();
    const navigateServiceDetails=(id)=>{
        navigate(`/service/${id}`);
    }
    const {id, name, price, description, img} = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <h2>Price: {price}</h2>
            <p>{description}</p>
            <button onClick={()=>{navigateServiceDetails(id)}} className='btn btn-primary p-2'>Book: {name}</button>
        </div>
    );
};

export default Service;
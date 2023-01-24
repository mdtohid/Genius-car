import React from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    console.log(useParams());
    return (
        <div>
            <h1>Service Details:{serviceId}</h1>
        </div>
    );
};

export default ServiceDetails;